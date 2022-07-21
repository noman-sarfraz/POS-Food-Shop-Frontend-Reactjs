import {
  Card,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
  Box,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function DishCard({ dish }) {
  // const [mouseOnAddToCart, setMouseOnAddToCart] = useState(false);
  // function handleMouseEnterInAddToCart() {
  //   setMouseOnAddToCart(true);
  // }
  // function handleMouseLeaveFromAddToCart() {
  //   setMouseOnAddToCart(false);
  // }

  return (
    <div>
      <Box>
        <Card
          sx={{
            width: "30vh",
            // height: 130,
            border: "1.5px solid black",
            borderRadius: 0,
            px: 5,
            // pt: 2,
            pb: 0,
            textAlign: "center",
          }}
          elevation={0}
        >
          <CardMedia
            component="img"
            // maxWidth="20vh"
            sx={{
              maxWidth: "30vh",
              mt: 0,
            }}
            // height="194"
            image={dish.image}
            alt="Pizza"
          />
          <CardContent sx={{ mb: 0, pb: 0 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {dish.name}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {dish.category}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                ml: -5,
                mt: 2,
                mr: -5,
                p: 0,
                // textAlign: "left",
                mb: 0,
              }}
            >
              <TextField
                variant="outlined"
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                defaultValue="5"
                size="small"
                sx={{
                  width: "70px",
                }}
                inputProps={{ style: { textAlign: "center" } }} // the change is here
                // startadornment={
                //   <InputAdornment position="start">$</InputAdornment>
                // }
              />
              <TextField
                // label="Amount"
                variant="outlined"
                size="small"
                type="number"
                defaultValue={1}
                sx={{
                  width: "70px",
                  // m: 0,
                  // p: 0,
                }}
                inputProps={{ min: 1 }} // the change is here
              />
            </Box>
            <Box sx={{ mt: 3, mx: -5 }}>
              <Button
                // onMouseEnter={handleMouseEnterInAddToCart}
                // onMouseLeave={handleMouseLeaveFromAddToCart}
                sx={{
                  border: "1px solid black",
                  color: "black",
                  width: "100%",
                  fontWeight: 600,
                  textTransform: "none",
                }}
              >
                Add to Cart
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default DishCard;
