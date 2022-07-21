import { Box, Typography, Button } from "@mui/material";
import React from "react";

function Order({ items }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", my: 1 }}>
      <Box
        sx={{
          border: "2px solid #ccc",
          width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
          px: 2,
          py: 3,
        }}
      >
        {items.slice(0, items.length - 1).map((item, index) => (
          <Box sx={{ display: "flex", mb: 1 }} key={index}>
            <Typography
              sx={{ width: "30%", fontWeight: 600, color: "#757575" }}
            >
              {item.title}:
            </Typography>
            <Typography
              sx={{ width: "70%", fontWeight: 600, ml: 1, color: "#5c6bc0" }}
            >
              {item.value}
            </Typography>
          </Box>
        ))}
        <Box sx={{ display: "flex", mb: 1 }}>
          <Typography
            sx={{ py: 1.5, width: "30%", fontWeight: 600, color: "#757575" }}
          >
            Order Status:
          </Typography>
          <select
            name="category"
            defaultValue={items[-1]}
            style={{
              width: "50%",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "8px",
              margin: "8px 2px 8px 2px",
              fontSize: "16px",
              fontFamily: "Quicksand",
            }}
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            // ml: -5,
            mt: 2,
            // mb: 1,
            // mr: -5,
            p: 0,
            pl: {
              xs: 0,
              sm: "30%",
            },
            // textAlign: "left",
            mb: 0,
            // mr: 1,
          }}
        >
          <Button
            variant="contained"
            disableElevation
            sx={{
              textTransform: "none",
              // px: 3.5,
              bgcolor: "#f9a825",
              mr: 1,
              width: "35%",
            }}
          >
            Update
          </Button>
          <Button
            variant="contained"
            disableElevation
            sx={{
              textTransform: "none",
              // px: 4,
              // bgcolor: "#e53935",
              width: "35%",
              bgcolor: "#e53935",
            }}
          >
            Delete
          </Button>
        </Box>

        {/* <Box sx={{ display: "flex", mb: 1 }}>
            <Typography
              sx={{ width: "30%", fontWeight: 500, color: "#9e9e9e" }}
            >
              your orders:
            </Typography>
            <Typography
              sx={{ width: "70%", fontWeight: 600, ml: 1, color: "#616161" }}
            >
              main dish 01($3 x 3) - pizza 02($3 x 2) - drink 02($3 x 3)
            </Typography>
          </Box>
          <Box sx={{ display: "flex", mb: 1 }}>
            <Typography
              sx={{ width: "30%", fontWeight: 500, color: "#9e9e9e" }}
            >
              payment method:
            </Typography>
            <Typography
              sx={{ width: "70%", fontWeight: 600, ml: 1, color: "#616161" }}
            >
              cash on delivery
            </Typography>
          </Box>
          <Box sx={{ display: "flex", mb: 1 }}>
            <Typography
              sx={{ width: "30%", fontWeight: 500, color: "#9e9e9e" }}
            >
              total amount:
            </Typography>
            <Typography
              sx={{ width: "70%", fontWeight: 600, ml: 1, color: "#616161" }}
            >
              $24
            </Typography>
          </Box>
          <Box sx={{ display: "flex", mb: 1 }}>
            <Typography
              sx={{ width: "30%", fontWeight: 500, color: "#9e9e9e" }}
            >
              payment status:
            </Typography>
            <Typography
              sx={{ width: "70%", fontWeight: 600, ml: 1, color: "red" }}
            >
              pending
            </Typography>
          </Box> */}
      </Box>
    </Box>
  );
}

export default Order;
