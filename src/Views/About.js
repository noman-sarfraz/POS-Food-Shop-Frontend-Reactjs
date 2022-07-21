import { Box, Typography, Grid, Button } from "@mui/material";
import Carousal from "react-elastic-carousel";
import React from "react";
import SubHeader from "../components/SubHeader";
import CoverPhoto from "./../assets/chef.png";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Review from "../components/Review";
import DishCarousal from "../components/DishCarousel";

const steps = [
  {
    icon: <MenuBookIcon sx={{ fontSize: "60px" }} />,
    title: "Choose Order",
    subtitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia culpa, est in maxime delectus fugit eum minima placeat quaerat quos tempore",
  },
  {
    icon: <DeliveryDiningIcon sx={{ fontSize: "60px" }} />,
    title: "Fast Delivery",
    subtitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia culpa, est in maxime delectus fugit eum minima placeat quaerat quos tempore",
  },
  {
    icon: <FastfoodIcon sx={{ fontSize: "60px" }} />,
    title: "Enjoy Food",
    subtitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia culpa, est in maxime delectus fugit eum minima placeat quaerat quos tempore",
  },
];

function About() {
  return (
    <Box sx={{}}>
      <SubHeader text="About Us" />
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item xs={10} md={4} lg={4}>
          <Box
            sx={{
              height: { xs: "40vh", md: "70vh" },
              mt: 4,
              // border: "1px solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={CoverPhoto} style={{ width: "30vh" }} />
          </Box>
        </Grid>
        <Grid item xs={10} md={6} lg={4}>
          <Box
            sx={{
              height: { xs: "60vh", md: "70vh" },
              // border: "1px solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, textAlign: "center", mt: 10, mb: 1 }}
              >
                Why Choose us?
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                perspiciatis magnam delectus, aliquam incidunt exercitationem.
                Sed asperiores inventore vero maxime aperiam reprehenderit
                deserunt mollitia, tempora obcaecati explicabo. Voluptatem,
                necessitatibus vero?
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  disableElevation
                  variant="contained"
                  color="warning"
                  sx={{ my: 2, textTransform: "none", px: 5 }}
                >
                  Our Menu
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      {/* -------------------- STEPS ---------------------- */}
      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      <div>
        <Typography
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            fontWeight: 700,
            mt: 5,
            mb: 1,
            fontSize: 32,
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          <div>SIMPLE STEPS</div>
        </Typography>
        <Box sx={{ display: { xs: "block", sm: "block", md: "block" } }}>
          <Grid
            container
            // columnSpacing={2}
            // rowSpacing={2}
            sx={{
              justifyContent: "center",
              mb: 1,
            }}
          >
            {steps.map((step, index) => (
              <Grid
                item
                xs={8}
                sm={6}
                md={3}
                lg={3}
                key={index}
                sx={{
                  border: "1px solid",
                  m: 1,
                  p: 2,

                  // display: "flex",
                  // justifyContent: "center",
                }}
              >
                <Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mb: 2 }}
                  >
                    {step.icon}
                  </Box>
                </Box>
                <Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mb: 1 }}
                  >
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 700,
                        textAlign: "center",
                      }}
                    >
                      {step.title}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 500,
                        color: "#9e9e9e",
                        textAlign: "center",
                      }}
                    >
                      {step.subtitle}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>

      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      {/* -------------------- Reviews -------------------- */}
      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          sx={{
            fontWeight: 700,
            mt: 5,
            mb: 2,
            fontSize: "26px",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          CUSTOMER'S REVIEWS
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Carousal
          showArrows={false}
          breakPoints={[
            { width: 1, itemsToShow: 1 },
            { width: 600, itemsToShow: 2 },
            { width: 900, itemsToShow: 3 },
            // { width: 1, itemsToShow: 3 },
          ]}
          style={{ width: "80%" }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((value, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: 2,
                width: "80%",
                border: "1px solid",
              }}
            >
              <Review />
            </Box>
          ))}
        </Carousal>
      </Box>
    </Box>
  );
}

export default About;
