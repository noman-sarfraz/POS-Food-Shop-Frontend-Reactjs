import React from "react";
import { Grid, Box, Divider } from "@mui/material";
import ContactCard from "./ContactCard";
import Data from "./../data";

function CategoryContainer() {
  const { contactItems: items } = Data();
  return (
    <Box sx={{ mt: 5, mb: 3 }}>
      <Divider sx={{ my: 5 }} />
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
          {items.map((item, index) => (
            <Grid
              item
              xs={12}
              md={3}
              lg={2.5}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ContactCard item={item} />
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
          {items.slice(0, 2).map((item, index) => (
            <Grid
              item
              sm={6}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ContactCard item={item} />
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
          {items.slice(2).map((item, index) => (
            <Grid
              item
              sm={6}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ContactCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ display: { xs: "block", sm: "none" }, py: 20 }}></Box>
    </Box>
  );
}

export default CategoryContainer;
