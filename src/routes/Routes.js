import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Cart from "../components/Cart";
const RoutesComponent=()=>{
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    );
}
export default RoutesComponent;