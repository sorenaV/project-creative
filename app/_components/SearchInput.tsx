"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

import { ButtonBase, InputBase, styled } from "@mui/material";

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

function SearchInput() {
  const [term, setTerm] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTerm(e.target.value);
  }

  function handleClick() {
    const params = new URLSearchParams(searchParams);
    if (!term.length) params.delete("term");
    params.set("term", term);
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      <StyledInput
        id="outlined-basic"
        placeholder="Type to search"
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
        }}
        onClick={handleClick}
        onAbort={() => setTerm("")}
      >
        Search
      </ButtonBase>
    </div>
  );
}

export default SearchInput;
