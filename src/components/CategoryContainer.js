import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import CategoryCard from "./CategoryCard";

function FoodCategory({ foodCategories }) {
  return (
    <div>
      <Typography
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          fontWeight: 700,
          mt: 5,
          mb: 5,
          fontSize: 32,
          textDecoration: "underline",
        }}
      >
        <div>Food Category</div>
      </Typography>
      <Box sx={{ display: { xs: "block", sm: "none", md: "block" } }}>
        <Grid
          container
          columnSpacing={1}
          rowSpacing={1}
          sx={{
            justifyContent: "center",
            mb: 1,
          }}
        >
          {foodCategories.map((category, index) => (
            <Grid
              item
              xs={12}
              md={3}
              lg={2.2}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CategoryCard category={category} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ display: { xs: "none", sm: "block", md: "none" } }}>
        <Grid
          container
          columnSpacing={1}
          sx={{
            justifyContent: "center",
            mb: 1,
          }}
        >
          {foodCategories.slice(0, 2).map((category, index) => (
            <Grid
              item
              sm={4.5}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CategoryCard category={category} />
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          columnSpacing={1}
          sx={{
            justifyContent: "center",
          }}
        >
          {foodCategories.slice(2).map((category, index) => (
            <Grid
              item
              sm={4.5}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CategoryCard category={category} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default FoodCategory;
