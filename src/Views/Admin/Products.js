import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AddProductCard from "../../components/Admin/AddProductCard";
import ProductContainer from "../../components/Admin/ProductContainer";
import Data from "../../data";

function Products() {
  const { products } = Data();
  return (
    <Box>
      <AddProductCard />
      <ProductContainer products={products} />
    </Box>
  );
}

export default Products;
