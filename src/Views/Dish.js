import { Box, Typography } from "@mui/material";
import React from "react";
import DishCardAddToCartVariant from "./../components/DishCardAddToCartVariant";
import Data from "./../data";

function Dish() {
  const { dishes } = Data();

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <Typography
          component="div"
          sx={{
            fontWeight: 700,
            mt: 2,
            mb: 2,
            fontSize: 32,
            textDecoration: "underline",
          }}
        >
          <div>Quick View</div>
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <DishCardAddToCartVariant dish={dishes[0]} />
      </Box>
    </div>
  );
}

export default Dish;
