"use client";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";

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

function SearchSortHeader({ fieldNames }: { fieldNames: string[] }) {
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
          Sort by
        </Typography>
        <ButtonGroup variant="text" aria-label="Basic button group">
          {fieldNames.map((field, index) => (
            <Button
              key={index}
              sx={{ color: "#000", height: 30, fontSize: 12 }}
            >
              {field}
            </Button>
          ))}
        </ButtonGroup>
        <StyledInput
          id="outlined-basic"
          placeholder="Type to search"
          sx={{
            ml: "auto",
            width: {
              xs: "100%",
              md: "40%",
            },
          }}
        />
      </Stack>
      <Divider sx={{ mt: 2 }} />
    </Box>
  );
}

export default SearchSortHeader;
