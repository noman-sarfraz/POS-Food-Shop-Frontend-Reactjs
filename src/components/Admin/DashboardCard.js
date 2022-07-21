import React from "react";
import { Box, Typography, Button } from "@mui/material";

function DashboardCard({ item }) {
  return (
    <Box
      sx={{
        width: "100%",
        border: "2px solid #ccc",
        borderRadius: 1,
        pb: 2,
        // display: "flex",
        // justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", py: 1 }}>
        <Typography variant="h6" sx={{ textAlign: "center", fontWeight: 600 }}>
          {item.description}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            border: "2px solid #ccc",
            borderRadius: 1,
            bgcolor: "#f5f5f5",
            width: "90%",
            py: 1,
            mb: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", fontWeight: 500 }}>
            {item.title}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            // border: "2px solid #ccc",
            borderRadius: 1,
            // bgcolor: "#424242",
            bgcolor: "#3f51b5",
            width: "90%",
            // py: 1,
          }}
        >
          <Button
            href={item.link}
            sx={{
              textAlign: "center",
              fontWeight: 500,
              width: "100%",
              color: "white",
              textTransform: "none",
            }}
          >
            {item.buttonText}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardCard;
