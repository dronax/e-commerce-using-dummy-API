import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remitem } from "../redux/action";
import "./styles.css"

const Cart = () => {
  const items = useSelector((state) => state?.cart);
  const dispatch=useDispatch()
  console.log("Cart Items",items)
  JSON.stringify(items)
  const remove=(item)=>{
    dispatch(remitem(item))
  }
  return (
    <div>
      {items.map((item) => (
        <div className="outercard" key={item.id}>
          <div className="card">
            <div className="prodimagee">
              <img src={item.image} className="prodimage" alt="prodimage"></img>
            </div>
            <div className="title">{item.title}</div>
            <div className="price">${item.price}</div>
            <div className="rating">
              <img src=""></img>
              {item.rating.rate}/{item.rating.count} Rated
            </div>
            <button className="addcart" onClick={()=>remove(item)}>
              Remove From Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
