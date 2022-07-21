import React from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import CakeIcon from "@mui/icons-material/Cake";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MainDish01 from "./../assets/dish-1.png";
import MainDish02 from "./../assets/dish-2.png";
import Pizza01 from "./../assets/pizza-1.png";
import Drink01 from "./../assets/drink-2.png";
import Dessert01 from "./../assets/dessert-1.png";
import Burger01 from "./../assets/burger-1.png";

const foodCategories = [
  {
    name: "Fast Food",
    icon: <LunchDiningIcon sx={{ fontSize: "72px" }} />,
    link: "#",
  },
  {
    name: "Main Dishes",
    icon: <RestaurantIcon sx={{ fontSize: "72px" }} />,
    link: "#",
  },
  {
    name: "Drinks",
    icon: <LocalBarIcon sx={{ fontSize: "72px" }} />,
    link: "#",
  },
  {
    name: "Desserts",
    icon: <CakeIcon sx={{ fontSize: "72px" }} />,
    link: "#",
  },
];

const dishes = [
  {
    name: "Main Dish 01",
    category: "Main Dish",
    image: MainDish01,
    link: "#",
  },
  {
    name: "Pizza 01",
    category: "Fast Food",
    image: Pizza01,
    link: "#",
  },
  {
    name: "Main Dish 02",
    category: "Main Dish",
    image: MainDish02,
    link: "#",
  },
  {
    name: "Drink 01",
    category: "Drinks",
    image: Drink01,
    link: "#",
  },
  {
    name: "Dessert 01",
    category: "Dessert",
    image: Dessert01,
    link: "#",
  },
  {
    name: "Burger 01",
    category: "Fast Food",
    image: Burger01,
    link: "#",
  },
];

const contactItems = [
  {
    title: "Our Number",
    icon: <LocalPhoneOutlinedIcon sx={{ fontSize: "60px" }} />,
    subtitles: ["111-416-083", "111-222-453"],
  },
  {
    title: "Our Address",
    icon: <LocationOnOutlinedIcon sx={{ fontSize: "60px" }} />,
    subtitles: ["Johar Town, H-Block, Lahore"],
  },
  {
    title: "Opening Hours",
    icon: <AccessTimeOutlinedIcon sx={{ fontSize: "60px" }} />,
    subtitles: ["7am to 10pm"],
  },
  {
    title: "Our Email",
    icon: <EmailOutlinedIcon sx={{ fontSize: "60px" }} />,
    subtitles: ["nomansarfraz486@gmail.com", "nomansarfrazf19@gmail.com"],
  },
];

const products = [
  {
    name: "Main Dish 01",
    category: "Main Dish",
    image: MainDish01,
    price: "$3",
    link: "#",
  },
  {
    name: "Pizza 01",
    category: "Fast Food",
    image: Pizza01,
    price: "$3",
    link: "#",
  },
  {
    name: "Main Dish 02",
    category: "Main Dish",
    image: MainDish02,
    price: "$3",
    link: "#",
  },
  {
    name: "Drink 01",
    category: "Drinks",
    image: Drink01,
    price: "$3",
    link: "#",
  },
  {
    name: "Dessert 01",
    category: "Dessert",
    image: Dessert01,
    price: "$3",
    link: "#",
  },
  {
    name: "Burger 01",
    category: "Fast Food",
    image: Burger01,
    price: "$3",
    link: "#",
  },
];

function Data() {
  return {
    foodCategories,
    dishes,
    contactItems,
    products,
  };
}

export default Data;
