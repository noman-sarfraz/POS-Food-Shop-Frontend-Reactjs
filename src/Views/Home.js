import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import CategoryContainer from "../components/CategoryContainer";
import DishContainer from "./../components/DishContainer";
import DishCarousal from "./../components/DishCarousel";

import Data from "./../data";

function Home() {
  const { foodCategories, dishes } = Data();
  return (
    <div>
      <Box component="main" sx={{ p: 3 }}>
        <DishCarousal />

        <CategoryContainer foodCategories={foodCategories} />
        <DishContainer dishes={dishes} title="Latest Dishes" />
      </Box>
    </div>
  );
}

export default Home;
