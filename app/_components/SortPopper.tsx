"use client";
import { useSearchParams } from "next/navigation";
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
import { useSearchParamsHandler } from "../_utils/useSearchParams";

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

function SortPopper() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { updateSearchParam } = useSearchParamsHandler();
  const searchParams = useSearchParams();

  const activeField = searchParams.get("sortBy") ?? "";
  const activeDirection = searchParams.get("order") ?? "";

  const [field, setField] = useState<string>(activeField);
  const [direction, setDirection] = useState<string>(activeDirection);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    updateSearchParam("order", direction);
    updateSearchParam("sortBy", field);
  };

  const open = Boolean(anchorEl);
  const id = open ? "search-popover" : undefined;

  return (
    <div>
      <Button id={id} onClick={handleClick}>
        مرتب کردن
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
                  <em>همه</em>
                </MenuItem>
                <MenuItem value="votes">رای ها</MenuItem>
                <MenuItem value="posts">تعداد پست</MenuItem>
                <MenuItem value="views">تعداد بازدید</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: "80%" }} variant="standard">
              <Select
                labelId="customized-select-label"
                id="customized-select"
                value={direction}
                onChange={(e) => setDirection(e.target.value)}
              >
                <MenuItem value="asc">صعودی</MenuItem>
                <MenuItem value="desc">نزولی</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </ClickAwayListener>
      </Popper>
    </div>
  );
}

export default SortPopper;
