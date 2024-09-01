import { Box, Button } from "@mui/material";
import { FilterOptionsType } from "../_types";
import FilterItem from "./FilterItem";

// REMINDER: Refactoring is needed

type FilterType = {
  buttonLabel: string;
  filterOptions: FilterOptionsType[];
};

function Filter({ buttonLabel, filterOptions }: FilterType) {
  return (
    <Box
      sx={{
        border: "2px solid #e9ecef",
        p: ".5rem",
        mt: "1rem",
        mx: "auto",
        borderRadius: 2,
        backgroundColor: "#f8f9fa",
        position: "sticky",
        top: 10,
        zIndex: 10,
        display: "flex",
        gap: {
          xs: 1,
          md: 3,
        },
      }}
    >
      {filterOptions.map((list, index) => (
        <FilterItem key={index} menuList={list} />
      ))}

      <Button
        size="medium"
        sx={{
          height: "2rem",
          ml: "auto",
          backgroundColor: "#0d6efd",
          color: "#fff",
          "&:hover": { backgroundColor: "#0d6efd" },
        }}
      >
        {buttonLabel}
      </Button>
    </Box>
  );
}

export default Filter;
