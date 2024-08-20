import { Filter1 } from "@mui/icons-material";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";

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
        position: "fixed",

        zIndex: 10,
      }}
    >
      <List
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
      </List>
    </Box>
  );
}

export default Filter;
