import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/layout";
import Main from "./pages/main/main";
import Categories from "./pages/categories/categories";
import About from "./pages/about/about";
import SingleArticle from "./pages/single-article/single-article";
import Contact from "./pages/contact/contact";
import NotFound from "./pages/page-not-found/page-not-found";

import "./assets/global.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="articles/:id" element={<SingleArticle />} />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<Categories />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
