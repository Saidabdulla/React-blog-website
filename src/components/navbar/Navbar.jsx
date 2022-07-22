import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer } from "@mui/material";
import DrawerContent from "../drawer-content/drawer-content";

import navbarCss from "./navbar.module.css";

const Navbar = ({ color }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      <nav className={navbarCss.navbar}>
        <IconButton
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          size="large"
          aria-label="menu"
          style={open ? { color: "white" } : { color: color || "white" }}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <Typography
          variant="h6"
          style={open ? { color: "white" } : { color: color || "white" }}
        >
          Personal Travel Blog
        </Typography>

        <IconButton
          size="large"
          aria-label="menu"
          style={open ? { color: "white" } : { color: color || "white" }}
        >
          <SearchIcon />
        </IconButton>
      </nav>

      <Drawer
        sx={{
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, .5)",
        }}
        open={open}
        anchor={"left"}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, .25)",
          },
        }}
      >
        <DrawerContent />
      </Drawer>
    </>
  );
};

export default Navbar;
