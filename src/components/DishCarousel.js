import React from "react";
import Carousal from "react-elastic-carousel";
import { Grid, Stack, Typography } from "@mui/material";
import { Paper, Button } from "@mui/material";
import { Box } from "@mui/material";
import CoverPhoto from "./../assets/chef.png";

import Burger1 from "./../assets/burger-1.png";
import Dessert1 from "./../assets/dessert-1.png";
import Dish1 from "./../assets/dish-1.png";
import Pizza1 from "./../assets/pizza-1.png";

function Example(props) {
  var items = [
    {
      name: "Burger-1",
      src: Burger1,
    },
    {
      name: "Dessert-1",
      src: Dessert1,
    },
    {
      name: "Dish-1",
      src: Dish1,
    },
    {
      name: "Pizza-1",
      src: Pizza1,
    },
  ];

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Carousal
        pagination={false}
        enableAutoPlay={true}
        focusOnSelect={true}
        showArrows={false}
        breakPoints={[{ width: 1, itemsToShow: 1 }]}
        style={{ width: "80%" }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px: 2,
              width: "100%",
              // border: "1px solid",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Grid item xs={10} md={4} lg={4}>
                <Box
                  sx={{
                    height: { xs: "40vh", md: "50vh" },
                    mt: 4,
                    // border: "1px solid",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: { xs: "none", md: "block" } }}>
                    <img src={item.src} style={{ width: "50vh" }} />
                  </Box>
                  <Box sx={{ display: { xs: "block", md: "none" } }}>
                    <img src={item.src} style={{ width: "40vh" }} />
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={10} md={4} lg={4}>
                <Box
                  sx={{
                    height: { xs: "10vh", md: "50vh" },
                    // border: "1px solid",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: { xs: 5 },
                  }}
                >
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        textAlign: "center",
                        color: "#9e9e9e",
                        mt: {
                          xs: 0,
                          md: 10,
                        },
                        mb: 0,
                      }}
                    >
                      Order Online
                    </Typography>
                    <Typography
                      // variant="h4"
                      sx={{
                        fontSize: "32px",
                        fontWeight: 600,
                        textAlign: "center",
                        // mt: 1,
                        // mb: 1,
                      }}
                    >
                      {item.name}
                    </Typography>
                    {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        disableElevation
                        variant="contained"
                        color="warning"
                        sx={{
                          my: 0,
                          textTransform: "none",
                          borderRadius: 0,
                          px: 1,
                        }}
                      >
                        See Menus
                      </Button>
                    </Box> */}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Carousal>
    </Box>
  );
}

export default Example;
