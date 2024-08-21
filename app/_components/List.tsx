import { Box } from "@mui/material";
import ListItem from "./ListIem";
import { data } from "@/app/_confing/data";

function List() {
  return (
    <Box>
      {data.map((item) => (
        <ListItem key={item.title} item={item} />
      ))}
    </Box>
  );
}

export default List;
