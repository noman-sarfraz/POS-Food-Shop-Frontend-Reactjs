import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

function AdminCard() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          textDecoration: "underline",
          mt: 2,
          mb: 3,
        }}
      >
        Admin Accounts
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            width: {
              xs: "80%",
              sm: "60%",
              md: "45%",
              lg: "30%",
            },
            mb: 1,
            flexDirection: "column",
            justifyContent: "center",
            border: "2px solid #ccc",
            borderRadius: 1,
            px: 2,
            py: 1,
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              color: "#757575",
              textAlign: "center",
              mb: 0.5,
            }}
          >
            Register new Admin
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              mb: 1,
              px: {
                xs: 0,
                sm: "10%",
              },
              mb: 0,
            }}
          >
            <Button
              variant="contained"
              disableElevation
              sx={{
                textTransform: "none",
                px: 3.5,
                bgcolor: "#f9a825",
                width: "100%",
              }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            width: {
              xs: "80%",
              sm: "60%",
              md: "45%",
              lg: "30%",
            },
            mb: 1,
            flexDirection: "column",
            justifyContent: "center",
            border: "2px solid #ccc",
            borderRadius: 1,
            px: 2,
            py: 1,
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              color: "#757575",
              textAlign: "center",
              mb: 0.5,
            }}
          >
            Admin ID: 1
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              color: "#757575",
              textAlign: "center",
              mb: 0.5,
            }}
          >
            Username: admin
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              mb: 1,
              px: {
                xs: 0,
                sm: "10%",
              },
              mb: 0,
            }}
          >
            <Button
              variant="contained"
              disableElevation
              sx={{
                textTransform: "none",
                px: 3.5,
                bgcolor: "#f9a825",
                width: "45%",
              }}
            >
              Update
            </Button>
            <Button
              variant="contained"
              disableElevation
              sx={{
                textTransform: "none",
                px: 4,
                width: "45%",
                bgcolor: "#e53935",
              }}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            width: {
              xs: "80%",
              sm: "60%",
              md: "45%",
              lg: "30%",
            },
            mb: 1,
            flexDirection: "column",
            justifyContent: "center",
            border: "2px solid #ccc",
            borderRadius: 1,
            px: 2,
            py: 1,
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              color: "#757575",
              textAlign: "center",
              mb: 0.5,
            }}
          >
            Admin ID: 1
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              color: "#757575",
              textAlign: "center",
              mb: 0.5,
            }}
          >
            Username: admin
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              mb: 1,
              px: {
                xs: 0,
                sm: "10%",
              },
              mb: 0,
            }}
          >
            <Button
              variant="contained"
              disableElevation
              sx={{
                textTransform: "none",
                px: 3.5,
                bgcolor: "#f9a825",
                width: "45%",
              }}
            >
              Update
            </Button>
            <Button
              variant="contained"
              disableElevation
              sx={{
                textTransform: "none",
                px: 4,
                width: "45%",
                bgcolor: "#e53935",
              }}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AdminCard;
