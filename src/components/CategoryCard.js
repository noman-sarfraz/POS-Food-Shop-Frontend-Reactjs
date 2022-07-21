import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import React, { useState } from "react";

function CategoryCard({ category }) {
  const [mouseOverCategory, setMouseOverCategory] = useState(false);
  function handleMouseEnterInCategory() {
    setMouseOverCategory(true);
  }
  function handleMouseLeaveFromCategory() {
    setMouseOverCategory(false);
  }

  return (
    <div>
      <Box component="a" href={category.link} sx={{ textDecoration: "none" }}>
        <Card
          onMouseEnter={handleMouseEnterInCategory}
          onMouseLeave={handleMouseLeaveFromCategory}
          sx={{
            width: 120,
            height: 130,
            border: "1.5px solid black",
            borderRadius: 0,
            px: 5,
            py: 2,
            textAlign: "center",
            color: mouseOverCategory ? "white" : "#000",
            bgcolor: mouseOverCategory ? "#222" : "white",
          }}
          elevation={0}
        >
          <CardMedia>{category.icon}</CardMedia>
          <CardContent sx={{ p: 1 }}>
            <Typography sx={{ fontSize: 16, fontWeight: 700 }} gutterBottom>
              {category.name}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default CategoryCard;
