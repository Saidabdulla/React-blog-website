import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Drawer } from "@mui/material";
import { Purple } from "@mui/material/colors";

import navbarCss from "./navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={navbarCss.navbar}>
        <IconButton
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          size="large"
          aria-label="menu"
          style={{ color: "white" }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ color: "white" }}>
          Personal Travel Blog
        </Typography>

        <IconButton size="large" aria-label="menu" style={{ color: "white" }}>
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
        Drawer content
      </Drawer>
    </>
  );
};

export default Navbar;
