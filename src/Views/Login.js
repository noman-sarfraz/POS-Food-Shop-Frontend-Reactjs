import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Login() {
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
          Login Now
        </Typography>
        <TextField
          label="Email"
          sx={{
            my: 1,
          }}
          type="email"
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
        <Button
          sx={{
            color: "black",
            my: 2,
            border: "0.5px solid #ccc",
          }}
        >
          Login Now
        </Button>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            my: 2,
          }}
        >
          don't have an account? <Link to="/register">register now</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;
