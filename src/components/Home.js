import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Card from './Card'
import "./styles.css"


const Home = () => {
  const dispatch = useDispatch();
  const[list,setList]=useState(null)
  const data=async()=>{
    try{
    const products = await axios.get(`https://fakestoreapi.com/products`)
    console.log("Loaded")
    const productsData=products.data
    setList(productsData)
    
    
  }
    catch{
    }
  }
  useEffect(()=>{
    data()
  },[])
  console.log("Data",list)
  // dispatch(setitem(list));
  return (
    <div className='items'>
      {list?(list.map((i)=>(
        <div className='item' key={i.id}>
          <Card item={i}/>
        </div>
      ))):(<div>Loading Data</div>)}
    </div>
  )
}

export default Home