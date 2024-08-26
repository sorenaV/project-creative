"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

import { categories } from "../_confing/categories";
import { Category } from "../_types";

import { ArrowDownward } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import useTheme from "@mui/material/styles/useTheme";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import InputBase from "@mui/material/InputBase";
import Popper from "@mui/material/Popper";

const StyledAutocompletePopper = styled("div")(({ theme }) => ({
  [`& .${autocompleteClasses.paper}`]: {
    boxShadow: "none",
    margin: 0,
    color: "inherit",
    fontSize: 11,
  },
  [`& .${autocompleteClasses.listbox}`]: {
    backgroundColor: "#fff",
    padding: 0,
    [`& .${autocompleteClasses.option}`]: {
      minHeight: "auto",
      alignItems: "flex-start",
      padding: 8,
      borderBottom: `1px solid #eaecef`,
      '&[aria-selected="true"]': {
        backgroundColor: "transparent",
      },
      [`&.${autocompleteClasses.focused}, &.${autocompleteClasses.focused}[aria-selected="true"]`]:
        {
          backgroundColor: theme.palette.action.hover,
        },
    },
  },
  [`&.${autocompleteClasses.popperDisablePortal}`]: {
    position: "relative",
  },
}));

function PopperComponent(props: any) {
  return <StyledAutocompletePopper {...props} />;
}

const StyledPopper = styled(Popper)(({ theme }) => ({
  border: `1px solid #e1e4e8`,
  boxShadow: `0 8px 24px rgba(149, 157, 165, 0.2)`,
  borderRadius: 6,
  width: 200,
  zIndex: theme.zIndex.modal,
  fontSize: 13,
  color: "#24292e",
  backgroundColor: "#fff",
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  padding: 10,
  width: "100%",
  borderBottom: `1px solid #eaecef`,
  "& input": {
    borderRadius: 4,
    backgroundColor: "#fff",
    padding: 5,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    border: `1px solid #eaecef`,
    fontSize: 12,
    "&:focus": {
      boxShadow: "0px 0px 0px 3px rgba(3, 102, 214, 0.3)",
      borderColor: theme.palette.mode === "light" ? "#0366d6" : "#388bfd",
    },
  },
}));

const Button = styled(ButtonBase)(({ theme }) => ({
  width: "max-content",
  fontSize: 13,
  textAlign: "left",
  padding: 10,
  backgroundColor: "#f8f9fa",
  border: "1px solid #dee2e6",
  borderRadius: 5,
  color: "#586069",
  fontWeight: 600,
  "&:hover,&:focus": {
    color: "#0366d6",
  },
  "& span": {
    width: "100%",
  },
  "& svg": {
    width: 16,
    height: 16,
    ml: "auto",
    color: "#0366d6",
  },
}));

export default function GitHubLabel() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [value, setValue] = useState<Category[]>([]);
  const [pendingValue, setPendingValue] = useState<Category[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const theme = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setPendingValue(value);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setValue(pendingValue);
    setAnchorEl(null);
    const params = new URLSearchParams(searchParams);
    if (!pendingValue.length) params.delete("categories");
    params.set("categories", pendingValue.map((label) => label.url).join(","));

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const open = Boolean(anchorEl);
  const id = open ? "github-label" : undefined;

  return (
    <>
      <Box sx={{ fontSize: 13 }}>
        <Button disableRipple aria-describedby={id} onClick={handleClick}>
          <span>{value.length > 0 ? value[0].name : "Category"}</span>
          <ArrowDownward />
        </Button>
      </Box>
      <StyledPopper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
      >
        <ClickAwayListener onClickAway={handleClose}>
          <div>
            <Autocomplete
              open
              multiple
              onClose={(_, reason) => {
                if (reason === "escape") {
                  handleClose();
                }
              }}
              value={pendingValue}
              onChange={(_, newValue) => {
                setPendingValue(newValue);
              }}
              disableCloseOnSelect
              PopperComponent={PopperComponent}
              renderTags={() => null}
              noOptionsText="No categories"
              renderOption={(props, option, { selected }) => {
                const { key, ...optionProps } = props;
                return (
                  <li key={key} {...optionProps}>
                    <Box
                      component={DoneIcon}
                      sx={{ width: 17, height: 17, mr: "5px", ml: "-2px" }}
                      style={{
                        visibility: selected ? "visible" : "hidden",
                      }}
                    />
                    <Box
                      component="span"
                      sx={{
                        width: 25,
                        height: 25,
                        flexShrink: 0,
                        borderRadius: "50%",
                        mr: 1,
                        mt: "2px",
                      }}
                      style={{
                        backgroundColor: option.backgroundColor,
                      }}
                    >
                      <Box
                        sx={{
                          m: 0.6,
                          "& :first-of-type": {
                            fontSize: 15,
                          },
                        }}
                      >
                        {option.icon}
                      </Box>
                    </Box>

                    <Box sx={{ my: "auto" }}>{option.name}</Box>
                    <Box
                      component={CloseIcon}
                      sx={{ opacity: 0.6, width: 18, height: 18 }}
                      style={{
                        visibility: selected ? "visible" : "hidden",
                      }}
                    />
                  </li>
                );
              }}
              options={[...categories].sort((a, b) => {
                let ai = value.indexOf(a);
                ai = ai === -1 ? value.length + categories.indexOf(a) : ai;
                let bi = value.indexOf(b);
                bi = bi === -1 ? value.length + categories.indexOf(b) : bi;
                return ai - bi;
              })}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <StyledInput
                  ref={params.InputProps.ref}
                  inputProps={params.inputProps}
                  autoFocus
                  placeholder="Filter categories"
                />
              )}
            />
          </div>
        </ClickAwayListener>
      </StyledPopper>
    </>
  );
}

// interface LabelType {
//   name: string;
//   url: string;
//   color: string;
//   description?: string;
//   labelIcon: any;
// }

// From https://github.com/abdonrd/github-labels
// const categories = [
//   {
//     name: "good first issue",
//     color: "#7057ff",
//     description: "Good for newcomers",
//     labelIcon: <ImportContactsSharp />,
//   },
//   {
//     name: "help wanted",
//     color: "#008672",
//     labelIcon: <ImportContactsSharp />,
//     description: "Extra attention is needed",
//   },
//   {
//     name: "priority: critical",
//     color: "#b60205",
//     labelIcon: <ImportContactsSharp />,
//     description: "",
//   },
//   {
//     name: "priority: high",
//     color: "#d93f0b",
//     labelIcon: <ImportContactsSharp />,
//     description: "",
//   },
//   {
//     name: "priority: low",
//     color: "#0e8a16",
//     labelIcon: <ImportContactsSharp />,
//     description: "",
//   },
//   {
//     name: "priority: medium",
//     color: "#fbca04",
//     labelIcon: <ImportContactsSharp />,
//     description: "",
//   },
//   {
//     name: "status: can't reproduce",
//     color: "#fec1c1",
//     labelIcon: <ImportContactsSharp />,
//     description: "",
//   },
//   {
//     name: "status: confirmed",
//     color: "#215cea",
//     labelIcon: <ImportContactsSharp />,
//     description: "",
//   },
//   {
//     name: "status: duplicate",
//     color: "#cfd3d7",
//     labelIcon: <ImportContactsSharp />,
//     description: "This issue or pull request already exists",
//   },
//   {
//     name: "status: needs information",
//     color: "#fef2c0",
//     labelIcon: <ImportContactsSharp />,
//     description: "",
//   },
//   {
//     name: "status: wont do/fix",
//     color: "#eeeeee",
//     labelIcon: <ImportContactsSharp />,
//     description: "This will not be worked on",
//   },
//   {
//     name: "type: bug",
//     color: "#d73a4a",
//     labelIcon: <ImportContactsSharp />,
//     description: "Something isn't working",
//   },
//   {
//     name: "type: discussion",
//     color: "#d4c5f9",
//     labelIcon: <ImportContactsSharp />,
//     description: "",
//   },
//   {
//     name: "type: documentation",
//     color: "#006b75",
//     labelIcon: <ImportContactsSharp />,
//     description: "",
//   },
//   {
//     name: "type: enhancement",
//     color: "#84b6eb",
//     labelIcon: <ImportContactsSharp />,
//     description: "",
//   },
//   {
//     name: "type: epic",
//     color: "#3e4b9e",
//     labelIcon: <ImportContactsSharp />,
//     description: "A theme of work that contain sub-tasks",
//   },
//   {
//     name: "type: feature request",
//     color: "#fbca04",
//     labelIcon: <ImportContactsSharp />,
//     description: "New feature or request",
//   },
//   {
//     name: "type: question",
//     color: "#d876e3",
//     labelIcon: <ImportContactsSharp />,
//     description: "Further information is requested",
//   },
// ];
