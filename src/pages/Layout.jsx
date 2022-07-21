import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>Footer Component</footer>
    </>
  );
};

export default Layout;
