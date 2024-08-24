"use client";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

function SearchSelect() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box>
      <FormControl>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          sx={{
            borderRadius: 2,
            width: 120,
            fontSize: 15,
            backgroundColor: "primary.main",
            color: "#fff",
            padding: "8px 16px",
            "& .MuiSelect-select": {
              padding: 0,
              display: "flex",
              alignItems: "center",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "& .MuiSelect-icon": {
              color: "#fff",
            },
          }}
          onChange={handleChange}
        >
          <MenuItem value="">none</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          sx={{
            borderRadius: 2,
            boxShadow:
              "0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08)",
            transition: "box-shadow 0.3s ease-in-out",
            width: 120,
            border: "1px #dee2e6",
            fontSize: 15,
            backgroundColor: "#f8f9fa",
            color: "#000",
            padding: "8px 16px",
            "& .MuiSelect-select": {
              padding: 0,
              display: "flex",
              alignItems: "center",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "& .MuiSelect-icon": {
              color: "#4890fc",
            },
          }}
          onChange={handleChange}
        >
          <MenuItem value="">none</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SearchSelect;
