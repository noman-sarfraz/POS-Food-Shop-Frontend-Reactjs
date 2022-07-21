import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

function AddProductCard() {
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
          my: 1,
          flexDirection: "column",
          justifyContent: "center",
          border: "2px solid #ccc",
          borderRadius: 1,
          px: 2,
          py: 1,
          // p: {
          //   xs: 2,
          //   sm: 3,
          //   md: 4,
          //   lg: 5,
          // },
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, textAlign: "center", mb: 1 }}
        >
          Add Product
        </Typography>
        <TextField
          label="Product Name"
          size="small"
          sx={{
            my: 1,
          }}
          required
        />
        <TextField
          label="Price"
          size="small"
          sx={{
            my: 0.5,
          }}
          type="number"
          required
        />

        <select
          name="category"
          style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "8px",
            margin: "8px 2px 8px 2px",
            fontSize: "16px",
            fontFamily: "Quicksand",
          }}
        >
          <option value="category">Select category --</option>
          <option value="mainDish">Main Dish</option>
          <option value="fastFood">Fast Food</option>
          <option value="drink">Drinks</option>
          <option value="dessert">Desserts</option>
        </select>

        {/* <Button variant="contained" component="label"> */}
        {/* Upload File */}
        <input
          type="file"
          style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "8px",
            margin: "8px 2px 8px 2px",
            fontSize: "16px",
            fontFamily: "Quicksand",
          }}
        />
        {/* </Button> */}

        <Button
          variant="contained"
          disableElevation
          sx={{
            color: "white",
            bgcolor: "#3f51b5",
            my: 1,

            border: "0.5px solid #ccc",
          }}
        >
          Add Product
        </Button>
      </Box>
    </Box>
  );
}

export default AddProductCard;
