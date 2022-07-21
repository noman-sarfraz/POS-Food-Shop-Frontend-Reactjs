import {
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function OrderCheckout() {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "black",
          color: "white",
          display: "flex",
          justifyContent: "center",
          py: 5,
          mx: -1,
          mt: -1,
        }}
      >
        <Typography variant="h4" sx={{ alignItems: "center", fontWeight: 700 }}>
          Checkout
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            fontWeight: 700,
            mt: 2,
            mb: 2,
            fontSize: 32,
            textDecoration: "underline",
          }}
        >
          <div>Order Summary</div>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: {
              xs: "80%",
              sm: "70%",
              md: "40%",
              lg: "30%",
            },
            p: 1.5,
            border: "2px solid #aaa",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                // display: "flex",
                // justifyContent: "center",
                width: "100%",
                p: 2,
                // m: 2,
                border: "1px solid black",
                bgcolor: "#212121",
                // color: "#9e9e9e",
              }}
            >
              <Typography
                sx={{ fontWeight: 700, fontSize: 18, color: "white", mb: 3 }}
              >
                Cart Items
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "#9e9e9e", fontWeight: 500 }}
                >
                  Main Dish 01
                </Typography>
                <Box sx={{ width: "20%" }}>
                  <Typography
                    variant="body1"
                    sx={{ color: "#fbc02d", fontWeight: 500 }}
                  >
                    $3 x 3
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "#9e9e9e", fontWeight: 500 }}
                >
                  Drink 01
                </Typography>
                <Box sx={{ width: "20%" }}>
                  <Typography
                    variant="body1"
                    sx={{ color: "#fbc02d", fontWeight: 500 }}
                  >
                    $3 x 2
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "#9e9e9e", fontWeight: 500 }}
                >
                  Pizza
                </Typography>
                <Box sx={{ width: "20%" }}>
                  <Typography
                    variant="body1"
                    sx={{ color: "#fbc02d", fontWeight: 500 }}
                  >
                    $2 x 3
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  bgcolor: "#ddd",
                  width: "90%",
                  px: 1.5,
                  py: 0.5,
                  mb: 2,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "#616161", fontWeight: 500 }}
                >
                  grand total:
                </Typography>
                <Box sx={{ width: "15%" }}>
                  <Typography
                    variant="body1"
                    sx={{ color: "#e65100", fontWeight: 600 }}
                  >
                    $24
                  </Typography>
                </Box>
              </Box>
              <Button
                sx={{
                  color: "black",
                  bgcolor: "#fbc02d",
                  borderRadius: 0,
                  px: 3,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                View Cart
              </Button>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                // width: {
                //   xs: "80%",
                //   sm: "60%",
                //   md: "45%",
                //   lg: "30%",
                // },
                // my: 3,
                flexDirection: "column",
                justifyContent: "center",
                // border: "0.5px solid #ccc",
                // p: {
                //   xs: 2,
                //   sm: 3,
                //   md: 4,
                //   lg: 5,
                // },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mt: 3, mb: 2, fontSize: 20 }}
              >
                Your Info
              </Typography>
              <Box sx={{ display: "flex", mb: 2 }}>
                <PersonIcon />
                <Typography variant="body1" sx={{ ml: 2 }}>
                  Noman Sarfraz
                </Typography>
              </Box>
              <Box sx={{ display: "flex", mb: 2 }}>
                <LocalPhoneIcon />
                <Typography variant="body1" sx={{ ml: 2 }}>
                  12456789
                </Typography>
              </Box>
              <Box sx={{ display: "flex", mb: 2 }}>
                <EmailIcon />
                <Typography variant="body1" sx={{ ml: 2 }}>
                  nomansarfraz486@gmail.com
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 1, fontSize: 20 }}
              >
                Delivery Address
              </Typography>
              <Box sx={{ display: "flex", mb: 2 }}>
                <LocationOnIcon />
                <Typography variant="body1" sx={{ ml: 2 }}>
                  Johar Town, L-Block, Lahore
                </Typography>
              </Box>

              <Button sx={{ color: "black", bgcolor: "#ddd", mt: 1, mb: 5 }}>
                Update Info
              </Button>

              {/* <FormControl fullWidth> */}
              {/* <InputLabel id="demo-simple-select-label">123456789</InputLabel> */}
              <Select
                size="small"
                // labelId="demo-simple-select-label"
                // id="demo-simple-select"
                // value={age}
                // label="Delivery"
                // defaultValue={"Age"}
                // renderValue={() => {
                //   <p>ellnac s</p>;
                // }}
                // onChange={handleChange}
              >
                <MenuItem value={10}>Cash on delivery</MenuItem>
                <MenuItem value={20}>Credit Card</MenuItem>
                <MenuItem value={30}>Paypal</MenuItem>
              </Select>
              <Button
                sx={{
                  fontWeight: 600,
                  color: "white",
                  bgcolor: "#ef5350",
                  my: 2,
                }}
              >
                Place Order
              </Button>
              {/* </FormControl> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default OrderCheckout;
