import {
  Card,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
  Box,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function ProductCard({ product }) {
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
          {/* <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                // border: "1px solid",
                mx: -6,
                mt: -1,
              }}
            >
              <IconButton
                sx={{
                  border: "1px solid",
                }}
              >
                <VisibilityIcon />
              </IconButton>
              <IconButton
                sx={{
                  border: "1px solid",
                }}
              >
                <ShoppingCartIcon />
              </IconButton>
            </Box>
          </CardContent> */}

          <CardMedia
            component="img"
            // maxWidth="20vh"
            sx={{
              maxWidth: "30vh",
              mt: 0,
            }}
            // height="194"
            image={product.image}
            alt="Pizza"
          />
          <CardContent sx={{ mb: 0, pb: 0 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mt: -2 }}>
              {product.name}
            </Typography>
            {/* <Typography variant="subtitle2" gutterBottom>
              {product.category}
            </Typography> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                ml: -5,
                mt: 1,
                mb: 1,
                mr: -5,
                p: 0,
                // textAlign: "left",
                mb: 0,
              }}
            >
              <Typography variant="subtitle2" gutterBottom>
                {product.price}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                {product.category}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                ml: -5,
                mt: 2,
                mb: -2,
                mr: -5,
                p: 0,
                // textAlign: "left",
                mb: 0,
              }}
            >
              <Button
                variant="contained"
                disableElevation
                sx={{ textTransform: "none", px: 3.5, bgcolor: "#f9a825" }}
              >
                Update
              </Button>
              <Button
                variant="contained"
                disableElevation
                sx={{ textTransform: "none", px: 4, bgcolor: "#e53935" }}
              >
                Delete
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default ProductCard;
