import React from "react";
import Navbar from "../navbar/navbar";

import headerCss from "./header.module.css";

const Header = () => {
  return (
    <header className={headerCss.header}>
      <Navbar />
    </header>
  );
};

export default Header;
