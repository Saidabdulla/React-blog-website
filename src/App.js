import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Categories from "./pages/Categories";
import About from "./pages/About";
import SingleArticle from "./pages/SingleArticle";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import "./assets/global.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="articles/:id" element={<SingleArticle />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="categories" element={<Categories />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
