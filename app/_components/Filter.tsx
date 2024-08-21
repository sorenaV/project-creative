import { Box, Button } from "@mui/material";
import FilterItem from "./FilterItem";
import { filterPopularList } from "../_confing/FilterConfing";

function Filter() {
  return (
    <Box
      sx={{
        border: "2px solid #e9ecef",
        px: ".5rem",
        my: "2rem",
        mx: "auto",
        borderRadius: 2,
        backgroundColor: "#f8f9fa",
        position: "sticky",
        zIndex: 10,
        display: "flex",
        gap: 3,
      }}
    >
      {filterPopularList.map((list) => (
        <FilterItem key={list.label} itemList={list} />
      ))}
      <Button
        variant="contained"
        size="medium"
        sx={{
          height: "2rem",
          ml: "auto",
          backgroundColor: "#0d6efd",
        }}
      >
        hello
      </Button>
    </Box>
  );
}

export default Filter;
{
  /* <List
        sx={{
          padding: 0,
        }}
      >
        <Stack direction="row">
          <Stack direction="row" sx={{ mr: "auto" }}>
            <ListItem>
              <ListItemButton sx={{ padding: 1 / 2, borderRadius: 2 }}>
                <ListItemIcon sx={{ minWidth: "30px", color: "#0d6efd" }}>
                  <Filter1 fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    display: {
                      xs: "none",
                      md: "block",
                    },
                  }}
                  primary="hello"
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={{ padding: 1 / 2, borderRadius: 2 }}>
                <ListItemIcon sx={{ minWidth: "30px", color: "#0d6efd" }}>
                  <Filter1 fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary="hello"
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItemButton>
            </ListItem>
          </Stack>
          <Button
            variant="contained"
            size="medium"
            sx={{ height: "2rem", my: "auto", backgroundColor: "#0d6efd" }}
          >
            hello
          </Button>
        </Stack>
      </List> */
}
