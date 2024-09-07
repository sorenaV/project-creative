import Link from "next/link";

import { Chip, IconButton } from "@mui/material";
import { getCategoryItem } from "../_utils/helpers";

function CategoryChip({ categoryId }: { categoryId: number }) {
  const { icon, backgroundColor, name } = getCategoryItem(categoryId);
  return (
    <Link href={`/category/${categoryId}`}>
      <Chip
        label={`${name}`}
        variant="outlined"
        size="small"
        sx={{
          borderRadius: 2,
          backgroundColor: backgroundColor,
          color: "#fff",
          fontWeight: 500,
          border: 0,
        }}
        icon={<IconButton size="small">{icon}</IconButton>}
      />
    </Link>
  );
}
export default CategoryChip;
