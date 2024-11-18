import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./Views/Home";
import About from "./Views/About";
import Cart from "./Views/Cart";
import Category from "./Views/Category";
import Contact from "./Views/Contact";
import Dish from "./Views/Dish";
import Login from "./Views/Login";
import Menu from "./Views/Menu";
import Order from "./Views/Order";
import Profile from "./Views/Profile";
import Register from "./Views/Register";
import Search from "./Views/Search";
import ContactContainer from "./components/ContactContainer";
import UpdateProfile from "./Views/UpdateProfile";
import OrderCheckout from "./Views/OrderCheckout";

// Admin
import AdminNavbar from "./components/Admin/AdminNavbar";
import AdminHome from "./Views/Admin/Home";
import AdminProducts from "./Views/Admin/Products";
import AdminUpdateProduct from "./Views/Admin/UpdateProduct";
import AdminOrders from "./Views/Admin/Orders";
import AdminAdmins from "./Views/Admin/Admins";
import AdminUsers from "./Views/Admin/Users";
import UpdateAdmin from "./Views/Admin/UpdateAdmin";
import RegisterAdmin from "./Views/Admin/RegisterAdmin";
// import AdminAbout from "./Views/About";
// import AdminCart from "./Views/Cart";
// import AdminCategory from "./Views/Category";
// import AdminContact from "./Views/Contact";
// import AdminDish from "./Views/Dish";
// import AdminLogin from "./Views/Login";
// import AdminMenu from "./Views/Menu";
// import AdminOrder from "./Views/Order";
// import AdminProfile from "./Views/Profile";
// import AdminRegister from "./Views/Register";
// import AdminSearch from "./Views/Search";
// import AdminContactContainer from "./components/ContactContainer";
// import AdminUpdateProfile from "./Views/UpdateProfile";
// import AdminOrderCheckout from "./Views/OrderCheckout";

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={<Category />} />
          <Route path="/dish" element={<Dish />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
        </Routes>
        <ContactContainer />
      </Router>
      {/* <Router>
        <AdminNavbar />
        <Routes>
          <Route path="/admin/" element={<AdminHome />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route
            path="/admin/update-product"
            element={<AdminUpdateProduct />}
          />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/admins" element={<AdminAdmins />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/update-admin" element={<UpdateAdmin />} />
          <Route path="/admin/register-admin" element={<RegisterAdmin />} />
        </Routes>
      </Router> */}
    </ThemeProvider>
  );
}

export default App; //

