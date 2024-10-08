"use client";
import React, { useState } from "react";
import type { UsersType } from "../_types";

import { ArrowDownward } from "@mui/icons-material";
import DoneIcon from "@mui/icons-material/Done";
import LabelIcon from "@mui/icons-material/Label";
import {
  Box,
  ButtonBase,
  Chip,
  ClickAwayListener,
  List,
  ListItem,
  ListItemText,
  Popper,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import InputBase from "@mui/material/InputBase";
import { styled, useTheme } from "@mui/material/styles";
import { useSearchParamsHandler } from "../_utils/useSearchParams";

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
      borderColor: "#0366d6",
    },
  },
}));

const Button = styled(ButtonBase)(({ theme }) => ({
  width: "max-content",
  fontSize: 13,
  fontFamily: "inherit",
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
  paramLabel: string;
};

export default function SearchPopover({
  label,
  posts,
  paramLabel,
}: PopoverPropsData) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState<UsersType[]>([]);
  const { updateSearchParam } = useSearchParamsHandler();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSearchValue("");
    updateSearchParam(
      paramLabel,
      selectedOptions.map((selec) => selec.userName).join(",")
    );
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
                  key={option.id}
                  label={option.name}
                  onDelete={() => handleDeleteChip(option)}
                  sx={{
                    backgroundColor: "#fff",
                    border: "#0d6efd 1px solid",
                    color: "#0d6efd",
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
