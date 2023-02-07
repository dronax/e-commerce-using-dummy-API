import React from 'react'
import "./styles.css"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div className="nav">
      <div className="Home" onClick={() => navigate("/")}>
        Home
      </div>
      <div className="About" onClick={() => navigate("/about")}>
        About
      </div>
      <div className="cart" onClick={() => navigate("/cart")}>
        My Cart
      </div>
    </div>
  );
}

export default Navbar