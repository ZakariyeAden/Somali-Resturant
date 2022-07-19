import React from "react";
import "../../Style/Home.css";
import { Link } from "react-router-dom";
import Meal from "../../Assets/Meal.jpg";
import { Parallax } from "react-parallax";
import HeroImg from "../../Assets/halal.jpg";
import Desert from "../../Assets/Desert1.jpg";
import Dining from "../../Assets/Dining.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Home() {
  return (
    <section id="home">
      <Parallax className="hero-section" bgImage={HeroImg} strength={-100}>
        <h1 className="main-heading">Somali and Gyro Resturant.</h1>
        <span className="subheading">Best Somali Food in, Minnesota</span>
        <div className="dflex">
          <Link to="/menu" className="btn">
            Menu
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contact
          </Link>
        </div>
      </Parallax>
      <Container className="meal-side" fluid>
        <Row className="grid2">
          <Col>
            <div className="imgbox">
              <img src={Meal} className="img" />
            </div>
          </Col>
          <Col>
            <div className="textbox">
              <h3 className="meal-heading">
                Our <br />
                Flavors
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br /> Explicabo esse accusantium libero laborum aperiam ad
                minima officiis placeat
              </p>
              <Link to="/menu">
                <button type="button" className="btn-outline">
                  Menu
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Parallax className="desert-section" bgImage={Desert} strength={-100}>
        <span className="desert-subheading">Don't forget</span>
        <h3 className="desert-heading">Desert</h3>
        <Link to="/menu">
          <button type="button" className="btn-transparent">
            Menu
          </button>
        </Link>
      </Parallax>
   
        <div className="grid2">
            <div className="textbox">
              <h4 className="heading">Our Place</h4>
              <span className="subheading-dining">
                Place Filled With Flavor
              </span>
              <p className="description">
                We are located in St. Louis Park, Minnesota. Despite our
                <br /> small location we serve hundreds daily with the fresh,
                <br /> flavor-filled taste of the Somalia.
              </p>
              <Link to="/contact">
                <button type="button" className="btn-outline">
                  Contact Us
                </button>
              </Link>
            </div>
      
            <div className="img-box">
              <img src={Dining} className="dining-img" />
            </div>
     </div>
    </section>
  );
}

export default Home;
