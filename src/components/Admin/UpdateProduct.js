import React from "react";
import { Box, Button, TextField, Typography, Card } from "@mui/material";
import Pizza01 from "./../../assets/pizza-1.png";

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
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Box
            component="img"
            // maxWidth="20vh"
            sx={{
              maxWidth: "30vh",
              mt: 0,
            }}
            // height="194"
            src={Pizza01}
            alt="Pizza"
          />
        </Box>
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
          value="$5"
          sx={{
            my: 0.5,
          }}
          type="number"
          required
        />

        <select
          name="category"
          defaultValue="fastFood"
          style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "8px",
            margin: "8px 2px 8px 2px",
            fontSize: "16px",
            fontFamily: "Quicksand",
          }}
        >
          <option value="category">Select Category</option>
          <option value="fastFood">Fast Food</option>
          <option value="mainDish">Main Dish</option>
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

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // ml: -5,
            mt: 2,
            mb: 1,
            // mr: -5,
            p: 0,
            // textAlign: "left",
            mb: 0,
          }}
        >
          <Button
            variant="contained"
            disableElevation
            sx={{
              textTransform: "none",
              px: 3.5,
              bgcolor: "#f9a825",
              width: "45%",
            }}
          >
            Update
          </Button>
          <Button
            variant="contained"
            disableElevation
            sx={{
              textTransform: "none",
              px: 4,
              // bgcolor: "#e53935",
              width: "45%",
            }}
          >
            Go Back
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddProductCard;
