"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { ArrowDownward } from "@mui/icons-material";
import {
  Box,
  ButtonBase,
  ClickAwayListener,
  FormControl,
  MenuItem,
  Popper,
  Select,
  styled,
} from "@mui/material";

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
  fontWeight: 550,
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

function SortBy() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeField = searchParams.get("sortBy") ?? "";
  const activeDirection = searchParams.get("order") ?? "";

  const [field, setField] = useState(activeField);
  const [direction, setDirection] = useState(activeDirection);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    const params = new URLSearchParams(searchParams);
    if (!field.length && !direction.length) return;
    params.set("sortBy", field);
    params.set("order", direction);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const open = Boolean(anchorEl);
  const id = open ? "search-popover" : undefined;

  return (
    <div>
      <Button id={id} onClick={handleClick}>
        Sort
        <ArrowDownward />
      </Button>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        sx={{ width: 250, border: "1px solid #dee2e6" }}
      >
        <ClickAwayListener onClickAway={handleClose} mouseEvent="onMouseUp">
          <Box
            sx={{
              border: "1px solid #dee2e6",
              p: 1,
              bgcolor: "background.paper",
            }}
          >
            <FormControl sx={{ m: 1, width: "80%" }} variant="standard">
              <Select
                labelId="customized-select-label"
                id="customized-select"
                value={field}
                onChange={(e) => setField(e.target.value)}
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                <MenuItem value="votes">Votes</MenuItem>
                <MenuItem value="posts">Number of posts</MenuItem>
                <MenuItem value="views">Number of views</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: "80%" }} variant="standard">
              <Select
                labelId="customized-select-label"
                id="customized-select"
                value={direction}
                onChange={(e) => setDirection(e.target.value)}
              >
                <MenuItem value="asc">in ascending order</MenuItem>
                <MenuItem value="desc">in descending order</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </ClickAwayListener>
      </Popper>
    </div>
  );
}

export default SortBy;
