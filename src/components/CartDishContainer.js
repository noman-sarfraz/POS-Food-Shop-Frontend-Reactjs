import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import DishCardCrossVariant from "./DishCardCrossVariant";

function FoodCategory({ dishes }) {
  return (
    <div>
      <Box sx={{ display: { xs: "block", sm: "block", md: "block" } }}>
        <Grid
          container
          columnSpacing={1}
          rowSpacing={1}
          sx={{
            justifyContent: "center",
            mb: 1,
          }}
        >
          {dishes.map((dish, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <DishCardCrossVariant dish={dish} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid black",
            px: 2,
            py: 1,
            width: {
              xs: "80%",
              sm: "60%",
              md: "60%",
              lg: "50%",
            },
          }}
        >
          <Typography>
            cart total: <span style={{ color: "red" }}>$21</span>
          </Typography>
          <Button
            sx={{
              color: "black",
              bgcolor: "yellow",
              border: "0.5 solid #ccc",
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Proceed to Checkout
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button
          sx={{
            color: "black",
            bgcolor: "#ef5350",
            border: "0.5 solid #ccc",
            px: 3,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Delete All
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button
          sx={{
            color: "black",
            bgcolor: "yellow",
            border: "0.5 solid #ccc",
            px: 4,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Continue Shopping
        </Button>
      </Box>
    </div>
  );
}

export default FoodCategory;
