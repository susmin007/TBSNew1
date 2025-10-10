import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Product from "./pages/Product";

import MouseShadow from "./components/MouseShadow"; // import the component
import PdfDownloads from "./components/PdfDownloads";

export default function App() {
  return (
    <>
      {/* Mouse shadow will be on all pages */}
      <MouseShadow />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Product />} />
        <Route path='/download' element={<PdfDownloads/>} />

      </Routes>
    </>
  );
}
