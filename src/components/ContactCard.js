import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import React from "react";

function ContactCard({ item }) {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 200,
          minWidth: 140,
          // height: 130,
          border: "1.5px solid black",
          borderRadius: 0,
          px: 2,
          py: 2,
          textAlign: "center",
        }}
        elevation={0}
      >
        <CardMedia>{item.icon}</CardMedia>
        <CardContent sx={{ p: 1 }}>
          <Typography
            sx={{ fontSize: 14, fontWeight: 700, mb: 2 }}
            gutterBottom
          >
            {item.title}
          </Typography>
          {item.subtitles.map((subtitle, index) => (
            <Typography key={index} variant="subtitle2" gutterBottom>
              {subtitle}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default ContactCard;
