import { Box, Typography } from "@mui/material";
import React from "react";
import DishContainer from "./../components/DishContainer";
import Data from "./../data";

function Menu() {
  const { dishes } = Data();
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "black",
          color: "white",
          display: "flex",
          justifyContent: "center",
          py: 5,
          mx: -1,
          mt: -1,
        }}
      >
        <Typography variant="h4" sx={{ alignItems: "center", fontWeight: 700 }}>
          Our Menu
        </Typography>
      </Box>
      <DishContainer dishes={dishes} title="Latest Dishes" />
    </Box>
  );
}

export default Menu;
