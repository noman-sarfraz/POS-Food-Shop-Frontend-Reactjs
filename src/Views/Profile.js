import { Box, Button, Typography } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Profile() {
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
        <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
          <PersonIcon sx={{ fontSize: "100px" }} />
        </Box>
        <Box sx={{ display: "flex", mb: 2 }}>
          <PersonIcon />
          <Typography variant="body1" sx={{ ml: 2 }}>
            Noman Sarfraz
          </Typography>
        </Box>
        <Box sx={{ display: "flex", mb: 2 }}>
          <LocalPhoneIcon />
          <Typography variant="body1" sx={{ ml: 2 }}>
            12456789
          </Typography>
        </Box>
        <Box sx={{ display: "flex", mb: 2 }}>
          <EmailIcon />
          <Typography variant="body1" sx={{ ml: 2 }}>
            nomansarfraz486@gmail.com
          </Typography>
        </Box>
        <Box sx={{ display: "flex", mb: 2 }}>
          <LocationOnIcon />
          <Typography variant="body1" sx={{ ml: 2 }}>
            Johar Town, L-Block, Lahore
          </Typography>
        </Box>
        <Button sx={{ color: "black", bgcolor: "#ddd", my: 3 }}>
          Update Info
        </Button>
      </Box>
    </Box>
  );
}

export default Profile;
