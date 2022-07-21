import { Avatar, Box, Rating, Typography } from "@mui/material";
import React from "react";
import Profile from "./../assets/profile1.jpg";

function Review() {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            alt="Profile Picture"
            src={Profile}
            sx={{ height: "50px", width: "50px", my: 2 }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="subtitle2"
            sx={{ color: "#9e9e9e", textAlign: "center", mb: 2 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            nisi consequatur blanditiis officia praesentium ducimus
            reprehenderit necessitatibus dignissimos quod vf dvsdvds vdsv dv sdv
            dv sdvs
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Rating
            name="read-only"
            value={4}
            readOnly
            sx={{ border: "1px solid #9e9e9e", px: 0.5 }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 2,
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>John Doe</Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Review;
