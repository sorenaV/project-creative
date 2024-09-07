"use client";
import styled from "@emotion/styled";
import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import { useSearchParamsHandler } from "../_utils/useSearchParams";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const StyledInput = styled(InputBase)(({ theme }) => ({
  padding: 5,

  "& input": {
    borderRadius: 4,
    backgroundColor: "#fff",
    padding: 10,
    border: `1px solid #eaecef`,
    fontSize: 16,
    "&:focus": {
      boxShadow: "0px 0px 0px 3px rgba(3, 102, 214, 0.3)",
      borderColor: "#0366d6",
    },
  },
}));

type SortAndSearchBarProps = {
  fieldNames: { label: string; value: string }[];
};

function SortAndSearchBar({ fieldNames }: SortAndSearchBarProps) {
  const { updateSearchParam } = useSearchParamsHandler();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("term") ?? "";
  const sortBy = searchParams.get("sortBy") ?? "";
  const [term, setTerm] = useState<string>(searchTerm);

  function handleClick(value: string) {
    updateSearchParam("sortBy", value);
  }

  function handleSearch(value: string) {
    updateSearchParam("term", value);
  }

  return (
    <Box sx={{ mt: { xs: 1, md: 0 } }}>
      <Stack direction={{ xs: "column", sm: "row" }} alignItems="center">
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontSize: 16,
            opacity: 0.5,
            fontWeight: 500,
          }}
        >
          مرتب کردن با
        </Typography>
        <ButtonGroup variant="text" aria-label="Basic button group">
          {fieldNames.map((field, index) => (
            <Button
              key={index}
              // disabled={sortBy === field.value}
              sx={{
                color: "#000",
                height: 30,
                fontSize: 12,
                backgroundColor: sortBy === field.value ? "#e3e4e5" : "",
                my: 2,
                "&:hover": {
                  backgroundColor: "#e3e4e5",
                },
              }}
              onClick={() => handleClick(field.value)}
            >
              {field.label}
            </Button>
          ))}
        </ButtonGroup>
        {/* <FormControl></FormControl> */}
        <StyledInput
          id="outlined-basic"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="جستجو..."
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" onClick={() => handleSearch(term)}>
                <Search />
              </IconButton>
            </InputAdornment>
          }
          sx={{
            ml: "auto",
            width: {
              xs: "100%",
              md: "40%",
            },
          }}
        />
      </Stack>
      <Divider sx={{ my: 2 }} />
    </Box>
  );
}

export default SortAndSearchBar;
