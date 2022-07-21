import { Box, TextField, Button } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import DishContainer from "./../components/DishContainer";
import Data from "./../data";

function Search() {
  const { dishes } = Data();
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <TextField label="Search" sx={{ width: "60%" }} />
        <Button sx={{ border: "1px solid #ccc", ml: 1, color: "black" }}>
          <SearchIcon />
        </Button>
      </Box>
      <DishContainer dishes={dishes} />
    </Box>
  );
}

export default Search;
