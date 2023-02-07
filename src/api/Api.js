import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addcart } from '../redux/action'

const Api =() => {  
  const [prod, setProd] = useState([]);
  const dispatch = useDispatch();
  const retrieve=async()=>{
  
  try{
  
  const product = await (await axios.get(`https://fakestoreapi.com/products`)).data
  setProd(product)
  dispatch(addcart(prod))
  }
  catch{
  }
  
  
}
useEffect(()=>{
  retrieve()
},[])
console.log("Loaded")

return <div></div>;
}

export default Api