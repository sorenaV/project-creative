"use client";
import { Button, InputBase, styled, TextField } from "@mui/material";
import { lightBlue } from "@mui/material/colors";

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
    fontSize: 16,
    "&:focus": {
      boxShadow: "0px 0px 0px 3px rgba(3, 102, 214, 0.3)",
      borderColor: theme.palette.mode === "light" ? "#0366d6" : "#388bfd",
    },
  },
}));

function SearchInput() {
  return (
    <div>
      <StyledInput id="outlined-basic" placeholder="Type to search" />
      <Button
        sx={{
          backgroundColor: lightBlue["A700"],
          color: "#fff",
          mt: 2,
          width: "100%",
          height: "42px",
        }}
      >
        Search
      </Button>
    </div>
  );
}

export default SearchInput;
