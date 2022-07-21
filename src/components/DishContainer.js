import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import DishCard from "./DishCard";

function FoodCategory({ dishes, title }) {
  return (
    <div>
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
        <div>{title}</div>
      </Typography>
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
              <DishCard dish={dish} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button sx={{ px: 5, py: 2, mt: 4, color: "black", bgcolor: "#ccc" }}>
          View All
        </Button>
      </Box>
    </div>
  );
}

export default FoodCategory;
