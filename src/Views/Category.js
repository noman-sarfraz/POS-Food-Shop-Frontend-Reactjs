import { Box } from "@mui/material";
import React from "react";
import DishContainer from "./../components/DishContainer";
import Data from "./../data";

export default function Category() {
  const { dishes } = Data();

  return (
    <Box>
      <DishContainer dishes={dishes.slice(0, 4)} title="Fast Food" />
    </Box>
  );
}
