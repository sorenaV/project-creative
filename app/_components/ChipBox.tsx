import { Chip, Typography } from "@mui/material";

function ChipBox({
  labelNumber,
  label,
}: {
  labelNumber: number | string;
  label: string;
}) {
  return (
    <Chip
      label={
        <Typography component="span" sx={{ fontSize: 12 }}>
          <Typography
            component="span"
            sx={{ fontWeight: 500, marginRight: 0.5, fontSize: 12 }}
          >
            {labelNumber}
          </Typography>
          {label}
        </Typography>
      }
      variant="outlined"
      size="small"
      sx={{ borderRadius: 2 }}
    />
  );
}
export default ChipBox;
