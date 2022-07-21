import { Box, Typography } from "@mui/material";
import React from "react";
import Order from "../../components/Admin/Order";

const items = [
  { title: "user id", value: "1" },
  { title: "placed on", value: "05-07-2022" },
  { title: "name", value: "Noman Sarfraz" },
  { title: "email", value: "noman@gmail.com" },
  { title: "number", value: "123456789" },
  {
    title: "address",
    value: "House-12, Street-7, Barkat Town, Shahdara, Lahore",
  },
  {
    title: "total products",
    value: "main dish 01($3 x 3) - pizza 02($3 x 2) - drink 02($3 x 3)",
  },
  { title: "total price", value: "$24/-" },
  { title: "payment method", value: "cash on delivery" },
  { title: "order status", value: "Pending" },
];

const orders = [items, items, items];

function Orders() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textDecoration: "underline",
          fontWeight: 700,
          textAlign: "center",
          mt: 1,
          mb: 3,
        }}
      >
        Your Orders
      </Typography>

      {orders.map((order, index) => (
        <Order items={order} key={index} />
      ))}
    </Box>

    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //   }}
    // >
    //   <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 5 }}>
    //     <Typography
    //       sx={{
    //         fontWeight: 700,
    //         fontSize: 32,
    //         textDecoration: "underline",
    //       }}
    //     >
    //       Your Orders
    //     </Typography>
    //   </Box>
    //   <Box sx={{ display: "flex", justifyContent: "center" }}>
    //     <Box
    //       sx={{
    //         border: "2px solid #ccc",
    //         width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
    //         px: 2,
    //         py: 3,
    //       }}
    //     >
    //       <Box sx={{ display: "flex", mb: 1 }}>
    //         <Typography
    //           sx={{ width: "30%", fontWeight: 500, color: "#9e9e9e" }}
    //         >
    //           placed on:
    //         </Typography>
    //         <Typography
    //           sx={{ width: "70%", fontWeight: 600, ml: 1, color: "#616161" }}
    //         >
    //           07-04-2022
    //         </Typography>
    //       </Box>
    //       <Box sx={{ display: "flex", mb: 1 }}>
    //         <Typography
    //           sx={{ width: "30%", fontWeight: 500, color: "#9e9e9e" }}
    //         >
    //           your orders:
    //         </Typography>
    //         <Typography
    //           sx={{ width: "70%", fontWeight: 600, ml: 1, color: "#616161" }}
    //         >
    //           main dish 01($3 x 3) - pizza 02($3 x 2) - drink 02($3 x 3)
    //         </Typography>
    //       </Box>
    //       <Box sx={{ display: "flex", mb: 1 }}>
    //         <Typography
    //           sx={{ width: "30%", fontWeight: 500, color: "#9e9e9e" }}
    //         >
    //           payment method:
    //         </Typography>
    //         <Typography
    //           sx={{ width: "70%", fontWeight: 600, ml: 1, color: "#616161" }}
    //         >
    //           cash on delivery
    //         </Typography>
    //       </Box>
    //       <Box sx={{ display: "flex", mb: 1 }}>
    //         <Typography
    //           sx={{ width: "30%", fontWeight: 500, color: "#9e9e9e" }}
    //         >
    //           total amount:
    //         </Typography>
    //         <Typography
    //           sx={{ width: "70%", fontWeight: 600, ml: 1, color: "#616161" }}
    //         >
    //           $24
    //         </Typography>
    //       </Box>
    //       <Box sx={{ display: "flex", mb: 1 }}>
    //         <Typography
    //           sx={{ width: "30%", fontWeight: 500, color: "#9e9e9e" }}
    //         >
    //           payment status:
    //         </Typography>
    //         <Typography
    //           sx={{ width: "70%", fontWeight: 600, ml: 1, color: "red" }}
    //         >
    //           pending
    //         </Typography>
    //       </Box>
    //     </Box>
    //   </Box>
    // </Box>
  );
}

export default Orders;
