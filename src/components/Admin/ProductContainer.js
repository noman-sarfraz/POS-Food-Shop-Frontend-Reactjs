import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import ProductCard from "./ProductCard";

function ProductContainer({ products }) {
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
          {products.map((product, index) => (
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
              <ProductCard product={product} />
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

export default ProductContainer;
