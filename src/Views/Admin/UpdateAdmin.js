import React from "react";
import { Link } from "react-router-dom";
import { Box, TextField, Button, Typography } from "@mui/material";

function UpdateAdmin() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          width: {
            xs: "80%",
            sm: "60%",
            md: "45%",
            lg: "30%",
          },
          my: 3,
          flexDirection: "column",
          justifyContent: "center",
          border: "0.5px solid #ccc",
          p: {
            xs: 2,
            sm: 3,
            md: 4,
            lg: 5,
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, textAlign: "center", mb: 2 }}
        >
          Update Admin
        </Typography>
        <TextField
          label="Name"
          sx={{
            my: 1,
          }}
          required
        />
        <TextField
          label="Old Password"
          sx={{
            my: 1,
          }}
          type="password"
          required
        />
        <TextField
          label="Password"
          sx={{
            my: 1,
          }}
          type="password"
          required
        />
        <TextField
          label="Confirm Password"
          sx={{
            my: 1,
          }}
          type="password"
          required
        />
        <Button
          sx={{
            color: "black",
            // bgcolor: "#ddd",
            my: 2,
            border: "0.5px solid #ccc",
            // width: "30%",
          }}
        >
          Update Now
        </Button>
      </Box>
    </Box>
  );
}

export default UpdateAdmin;
