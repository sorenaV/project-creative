import { Box, Typography } from "@mui/material";

function Message() {
  return (
    <Box
      bgcolor="#cff4fc"
      sx={{
        border: 1,
        borderRadius: 2,
        borderColor: "primary.main",
        p: 2,
        mt: { xs: 2, lg: 0 },
        ml: { md: 2 },
        height: "100%",
      }}
    >
      <Typography
        variant="h6"
        component="h6"
        fontSize={{
          xs: 16,
          md: 18,
        }}
        sx={{ marginBottom: 2 }}
        fontWeight={500}
      >
        خوش آمدید به نودبی
      </Typography>

      <Typography
        variant="body1"
        component="p"
        sx={{ marginBottom: 2 }}
        fontSize={{
          xs: 14,
          md: 16,
        }}
      >
        این وب‌سایت نمونه‌ای از NodeBB است که می‌توانید از آن برای آزمایش
        استفاده کنید نرم افزار انجمن ما این یک نصب پیش فرض با حداقل پیکربندی است
        تغییر می کند.
      </Typography>

      <Typography
        variant="body1"
        component="p"
        sx={{ marginBottom: 2 }}
        fontSize={{
          xs: 14,
          md: 16,
        }}
      >
        برای اطلاعات بیشتر در این سایت، لطفا این پست را بررسی کنید.
      </Typography>

      <Typography
        variant="body1"
        component="p"
        fontSize={{
          xs: 14,
          md: 16,
        }}
      >
        این اطلاعات از طریق سیستم ابزارک ها، در زیر نمایش داده می شود منوی
        Extend در کنترل پنل مدیریت
      </Typography>
    </Box>
  );
}

export default Message;
