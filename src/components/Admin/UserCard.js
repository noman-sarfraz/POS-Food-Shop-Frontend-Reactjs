import React from "react";
import { Box, Button, Typography } from "@mui/material";

function UserCard() {
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
        Users Accounts
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
            User ID: 1
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              color: "#757575",
              textAlign: "center",
              mb: 0.5,
            }}
          >
            Username: Noman
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
              color="error"
              variant="contained"
              disableElevation
              sx={{
                textTransform: "none",
                px: 3.5,
                // bgcolor: "#e53935",
                width: "100%",
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
            User ID: 1
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              color: "#757575",
              textAlign: "center",
              mb: 0.5,
            }}
          >
            Username: Noman
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
              color="error"
              variant="contained"
              disableElevation
              sx={{
                textTransform: "none",
                px: 3.5,
                // bgcolor: "#e53935",
                width: "100%",
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

export default UserCard;
