import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import { setitem } from './redux/action';
import { useDispatch,} from "react-redux";
import React, { useEffect} from "react";
import axios from 'axios';


function App() {
    const dispatch = useDispatch();
    const data = async () => {
      try {
        const products = await axios.get(`https://fakestoreapi.com/products`);
        console.log("Loaded");
        const productsData = products.data;
        dispatch(setitem(productsData))

      } catch {}
    };
    useEffect(() => {
      data();
    }, []);
  return (
    
      <Router>
        <div className="App">
          <Navbar />
          <Routes />
        </div>
      </Router>

  );
}

export default App;
