import React from "react";
import { Box, Typography } from "@mui/material";

function SubHeader({ text }) {
  return (
    <Box
      sx={{
        bgcolor: "#212121",
        color: "white",
        display: "flex",
        justifyContent: "center",
        py: {
          xs: 3,
          sm: 3,
          md: 4,
          lg: 4,
        },
        mx: -1,
        mt: -1,
      }}
    >
      <Typography variant="h4" sx={{ alignItems: "center", fontWeight: 700 }}>
        {text}
      </Typography>
    </Box>
  );
}

export default SubHeader;
