import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { ListItemIcon } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import RedeemIcon from "@mui/icons-material/Redeem";
import CallIcon from "@mui/icons-material/Call";

const drawerWidth = 240;
const navItems = [
  { text: "Home", icon: <HomeIcon />, link: "/" },
  { text: "About", icon: <InfoIcon />, link: "about" },
  { text: "Menu", icon: <MenuBookIcon />, link: "/menu" },
  { text: "Order", icon: <RedeemIcon />, link: "/order" },
  // { text: "Contact", icon: <CallIcon />, link: "/contact" },
];

const navItems_2 = [
  { name: "search", text: "Search", icon: <SearchIcon />, link: "/search" },
  {
    name: "cart",
    text: "Cart",
    icon: <ShoppingCartIcon />,
    link: "/cart",
  },
  { name: "profile", text: "Profile", icon: <PersonIcon />, link: "/profile" },
];

function DrawerAppBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [subMenuOpen, setSubMenuOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const handleSubMenuToggle = () => {
  //   setSubMenuOpen(!subMenuOpen);
  // };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ ml: -7.5 }}
      >
        <MenuIcon />
      </IconButton>
      <Button
        href="/"
        sx={{
          fontWeight: 600,
          fontSize: 16,
          color: "black",
          my: 2,
          ml: 1,
        }}
      >
        YUM-YUM 😋
      </Button>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton href={item.link}>
              <ListItemIcon sx={{ color: "black" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
        <Divider sx={{ my: 1 }} />
        {navItems_2.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{ display: { sm: "none" } }}
          >
            <ListItemButton href={item.link}>
              <ListItemIcon sx={{ color: "black" }}>
                {item.icon}
                {item.name === "cart" && (
                  <span>
                    <sub>(0)</sub>
                  </span>
                )}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <AppBar
          component="nav"
          elevation={0}
          sx={{
            color: "black",
            bgcolor: "white",
            borderBottom: "1px solid #ccc",
            px: {
              xs: 0,
              lg: 5,
            },
          }}
        >
          <Toolbar>
            <Box sx={{ flexGrow: 1, mx: 2, display: { md: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "block", sm: "block" },
              }}
            >
              <Button
                href="/"
                sx={{
                  fontWeight: 600,
                  fontSize: 16,
                  color: "black",
                  textTransform: "none",
                }}
              >
                YUM-YUM 😋
              </Button>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  href={item.link}
                  sx={{
                    fontWeight: 600,
                    fontSize: 16,
                    color: "black",
                    textTransform: "none",
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
            <Box sx={{ color: "blue", display: { xs: "none", sm: "block" } }}>
              {navItems_2.map((icon, index) => (
                <IconButton
                  key={index}
                  sx={{ color: "black" }}
                  href={icon.link}
                >
                  {icon.icon}
                  {icon.name === "cart" && (
                    <span>
                      <sub style={{ fontSize: 16 }}>(0)</sub>
                    </span>
                  )}
                </IconButton>
              ))}
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      <Toolbar />
    </div>
  );
}

export default DrawerAppBar;
