import React from 'react'
import "./styles.css"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div className="nav">
      <div className="Home navb" onClick={() => navigate("/")}>
        Home
      </div>
      <div className="About navb" onClick={() => navigate("/about")}>
        About
      </div>
      <div className="cart navb" onClick={() => navigate("/cart")}>
        My Cart
      </div>
    </div>
  );
}

export default Navbar