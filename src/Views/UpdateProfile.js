import React from "react";
import { Link } from "react-router-dom";
import { Box, TextField, Button, Typography } from "@mui/material";

function UpdateProfile() {
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
          Update Profile
        </Typography>
        <TextField
          label="Name"
          defaultValue={"Noman"}
          sx={{
            my: 1,
          }}
          required
        />
        <TextField
          label="Email"
          sx={{
            my: 1,
          }}
          type="email"
          required
        />
        <TextField
          label="Number"
          sx={{
            my: 1,
          }}
          type="number"
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
        <TextField
          label="Location"
          sx={{
            my: 1,
          }}
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
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            my: 2,
          }}
        >
          already have an account? <Link to="/login">login now</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default UpdateProfile;
