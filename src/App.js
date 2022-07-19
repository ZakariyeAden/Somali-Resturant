import React from "react";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Menu from "./Components/Pages/Menu";
import Contact from "./Components/Pages/Contact";
import Navbar from "./Components/Nav/Navbar";
import Footer from './Components/Footer/Footer'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
