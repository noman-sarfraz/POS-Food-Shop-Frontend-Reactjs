import React from "react";
import { Box, Typography } from "@mui/material";
import DishCardCrossVariant from "./../components/DishCardCrossVariant";
import CartDishContainer from "./../components/CartDishContainer";

import Data from "./../data";

function Cart() {
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
          Shopping Cart
        </Typography>
      </Box>
      <Typography
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          fontWeight: 700,
          mt: 2,
          mb: 5,
          fontSize: 32,
          textDecoration: "underline",
        }}
      >
        <div>Your Cart</div>
      </Typography>
      <CartDishContainer dishes={dishes} />
    </Box>
  );
}

export default Cart;
