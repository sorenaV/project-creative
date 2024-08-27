"use client";
import React, { useState } from "react";
import {
  Popper,
  Box,
  ClickAwayListener,
  Chip,
  List,
  ListItem,
  ListItemText,
  ButtonBase,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import LabelIcon from "@mui/icons-material/Label";
import DoneIcon from "@mui/icons-material/Done";
import { UsersType } from "../_types";
import { orange } from "@mui/material/colors";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowDownward, DownhillSkiing } from "@mui/icons-material";

interface OptionType {
  name: string;
  description: string;
  color: string;
}

const options: OptionType[] = [
  { name: "Bug", description: "Issues related to bugs", color: "#d73a4a" },
  {
    name: "Documentation",
    description: "Improvements or additions to documentation",
    color: "#0075ca",
  },
  // Add more options as needed
];

// Styled components based on your previous styles
const StyledPopper = styled(Popper)(({ theme }) => ({
  border: `1px solid #e1e4e8`,
  boxShadow: `0 8px 24px rgba(149, 157, 165, 0.2)`,
  borderRadius: 6,
  width: 250,
  zIndex: theme.zIndex.modal,
  fontSize: 13,
  color: "#24292e",
  backgroundColor: "#fff",
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  padding: 5,
  width: "100%",
  borderBottom: `1px solid #eaecef`,
  "& input": {
    borderRadius: 4,
    backgroundColor: "#fff",
    padding: 10,
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
  color: "#000",
  fontWeight: 500,
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

type PopoverPropsData = {
  label: string;
  posts: UsersType[];
};

export default function CustomPopover({ label, posts }: PopoverPropsData) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchValue, setSearchValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<UsersType[]>([]);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSearchValue("");
    const params = new URLSearchParams(searchParams);
    if (!selectedOptions.length) params.delete(label);
    params.set(label, selectedOptions.map((selec) => selec.name).join(","));
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleOptionClick = (option: UsersType) => {
    setSelectedOptions((prev) => {
      if (prev.some((selected) => selected.name === option.name)) {
        return prev.filter((selected) => selected.name !== option.name);
      } else {
        return [...prev, option];
      }
    });
    setSearchValue(""); // Clear search input after selecting an option
  };

  const handleDeleteChip = (option: UsersType) => {
    setSelectedOptions((prev) =>
      prev.filter((selected) => selected.name !== option.name)
    );
  };

  const filteredOptions = searchValue
    ? posts.filter((option) =>
        option.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [];

  const open = Boolean(anchorEl);
  const id = open ? "search-popover" : undefined;

  return (
    <div>
      <Box>
        <Button id={id} onClick={handleClick}>
          <span>{label}</span>
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
          <Box sx={{ p: 1 }}>
            {/* Search Input */}
            <StyledInput
              placeholder="Search labels"
              value={searchValue}
              onChange={handleSearchChange}
            />

            {/* Selected Options as Chips */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, my: 1 }}>
              {selectedOptions.map((option) => (
                <Chip
                  key={option.name}
                  label={option.name}
                  onDelete={() => handleDeleteChip(option)}
                  sx={{
                    backgroundColor: orange[500],
                    color: "blue",
                  }}
                />
              ))}
            </Box>

            {/* Search Results */}
            <List>
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <ListItem
                    key={option.name}
                    button
                    onClick={() => handleOptionClick(option)}
                    sx={{ alignItems: "flex-start", p: 1 }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                      <LabelIcon sx={{ color: orange[500], mr: 1 }} />
                      <Box
                        sx={{
                          width: 14,
                          height: 14,
                          flexShrink: 0,
                          borderRadius: "3px",
                          backgroundColor: orange[500],
                        }}
                      />
                    </Box>
                    <ListItemText
                      primary={option.name}
                      primaryTypographyProps={{
                        fontWeight: selectedOptions.some(
                          (selected) => selected.name === option.name
                        )
                          ? "bold"
                          : "normal",
                      }}
                    />
                    {selectedOptions.some(
                      (selected) => selected.name === option.name
                    ) && (
                      <DoneIcon sx={{ color: theme.palette.success.main }} />
                    )}
                  </ListItem>
                ))
              ) : searchValue ? (
                <ListItem>
                  <ListItemText primary="No labels found" />
                </ListItem>
              ) : null}
            </List>
          </Box>
        </ClickAwayListener>
      </StyledPopper>
    </div>
  );
}
