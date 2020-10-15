import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Navbar from './container/Navbar';
import Main from './container/Main';
import Footer from './container/Footer';


function App() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Navbar modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <Main modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
