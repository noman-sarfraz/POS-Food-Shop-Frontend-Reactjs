import { Box, Typography, Grid, Button } from "@mui/material";
import React from "react";
import DashboardCard from "../../components/Admin/DashboardCard";

const items = [
  {
    title: "Admin",
    description: "Welcome!",
    buttonText: "Update Profile",
    link: "#",
  },
  {
    title: "Total Pendings",
    description: "$5/-",
    buttonText: "See Orders",
    link: "#",
  },
  {
    title: "Total Completes",
    description: "$24/-",
    buttonText: "See Orders",
    link: "#",
  },
  {
    title: "Total Orders",
    description: "2",
    buttonText: "See Orders",
    link: "#",
  },
  {
    title: "Products Added",
    description: "8",
    buttonText: "See Products",
    link: "#",
  },
  {
    title: "User Accounts",
    description: "1",
    buttonText: "See Users",
    link: "#",
  },
  {
    title: "Admins",
    description: "1",
    buttonText: "See Admins",
    link: "#",
  },
  {
    title: "New Messages",
    description: "1",
    buttonText: "See Messages",
    link: "#",
  },
];

function Home() {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", pt: 1, pb: 3 }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            textDecoration: "underline",
          }}
        >
          Dashboard
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
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
            {items.map((item, index) => (
              <Grid
                item
                xs={8}
                sm={6}
                md={3}
                lg={3}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <DashboardCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
