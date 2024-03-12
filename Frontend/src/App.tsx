import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import React from "react";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
