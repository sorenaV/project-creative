import { Box, Button, Stack } from "@mui/material";
import type { FilterOptionsType } from "../_types";
import FilterItem from "./FilterItem";
import Link from "next/link";

// REMINDER: Refactoring is needed

type FilterType = {
  buttonLabel: string;
  buttonPath: string;
  filterOptions: FilterOptionsType[];
};

function Filter({ buttonLabel, buttonPath, filterOptions }: FilterType) {
  return (
    <Stack
      direction="row"
      spacing={{ xs: 1, md: 3 }}
      sx={{
        border: "2px solid #e9ecef",
        p: ".5rem",
        my: "1rem",
        borderRadius: 2,
        backgroundColor: "#f8f9fa",
        position: "sticky",
        top: 10,
        zIndex: 10,
        justifyContent: "space-between",
      }}
    >
      <Stack direction="row" spacing={2}>
        {filterOptions.map((list, index) => (
          <FilterItem key={index} menuList={list} />
        ))}
      </Stack>
      <Link href={`${buttonPath}`}>
        <Button
          size="medium"
          sx={{
            height: "2rem",
            backgroundColor: "#0d6efd",
            color: "#fff",
            "&:hover": { backgroundColor: "#0d6efd" },
          }}
        >
          {buttonLabel}
        </Button>
      </Link>
    </Stack>
  );
}

export default Filter;
