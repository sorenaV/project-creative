"use client";
import React, { useState } from "react";

import { ButtonBase, InputBase, styled } from "@mui/material";
import { useSearchParamsHandler } from "../_utils/useSearchParams";

const StyledInput = styled(InputBase)(({ theme }) => ({
  padding: 5,
  marginTop: 10,
  width: "100%",
  "& input": {
    borderRadius: 4,
    backgroundColor: "#fff",
    padding: 10,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    border: `1px solid #eaecef`,
    fontSize: 16,
    "&:focus": {
      boxShadow: "0px 0px 0px 3px rgba(3, 102, 214, 0.3)",
      borderColor: "#0366d6",
    },
  },
}));

function SearchBar() {
  const [term, setTerm] = useState<string>("");
  const { updateSearchParam } = useSearchParamsHandler();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTerm(e.target.value);
  }

  function handleClick() {
    updateSearchParam("term", term);
  }

  return (
    <div>
      <StyledInput
        id="outlined-basic"
        placeholder="جستجو"
        value={term}
        onChange={handleChange}
      />
      <ButtonBase
        sx={{
          backgroundColor: "#0d6efd",
          color: "#fff",
          mt: 2,
          width: "100%",
          height: "42px",
          borderRadius: 2,
          fontFamily: "inherit",
        }}
        onClick={handleClick}
        onAbort={() => setTerm("")}
      >
        جستجو
      </ButtonBase>
    </div>
  );
}

export default SearchBar;
