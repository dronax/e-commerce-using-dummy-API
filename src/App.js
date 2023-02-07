import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import { Provider } from 'react-redux';
import store from './redux/store'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
