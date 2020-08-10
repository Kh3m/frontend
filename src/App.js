import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Navbar from './container/Navbar';
import Main from './container/Main';
import Footer from './container/Footer';


function App() {
  return (
    <BrowserRouter>
       <div  className="grid-container">
          <Navbar />
          <Main />
          <Footer />
        </div>
    </BrowserRouter>
   
  );
}

export default App;
