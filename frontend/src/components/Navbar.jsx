import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#6F4F1F" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Expense Tracker
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/Services">
          Services
        </Button>
        <Button color="inherit" component={Link} to="/GetStarted">
          Get Started
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
