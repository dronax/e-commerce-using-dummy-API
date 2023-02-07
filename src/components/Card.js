import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { addcart } from "../redux/action";

const Card = ({ item }) => {
  const selitem = useSelector((state) => state?.item);
  const dispatch = useDispatch();
  const addtocart = (item) => {
    dispatch(addcart(item));
  };
  return (
    <div className="outercard">
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
        <button className="addcart" onClick={() => addtocart(item)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
