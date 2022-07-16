import React from "react";
import "../../Style/Home.css";
import { Link } from 'react-router-dom'
function Home() {
  return (
    <section id="home">
      <div className="hero-section">
        <h1 className="main-heading">Somali Food</h1>
        <span className="subheading">Best Somali Food in, Minnesota</span>
        <div className="dflex">
          <Link to="/menu" className="btn">Menu</Link>
          <Link to="/contact" className="btn btn-secondary">Contact</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
