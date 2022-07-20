import React from "react";
import { Parallax } from "react-parallax";
import Meal from "../../Assets/Meal.jpg";
import "../../Style/About.css";
import Chef from "../../Assets/Chef.jpg";
import Container from 'react-bootstrap/Container';
const insideStyles = {
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};
function About() {
  return (
    <section>
      <Parallax bgImage={Meal}>
        <div style={{ height: 500 }}>
          <div style={insideStyles} className="about-us  ">
            About <br />
            <span className="company-name">Somali and Gyro Resturant</span>
          </div>
        </div>
      </Parallax>

      <section className="about-story">
      <h3 className="place-heading">OUR PLACE</h3>
        <p className="family">Family First</p>
        <Container className="img-box">
          <img src={Chef} className="img-"/>
        </Container>
          <p className="description-">Somali and Gyro resturant opened on Wednesday May 22nd, 2013 in St. Louis Park, Minnesota with one goal: Bring authentic Somali and Mediterranean food to the upper midwest.  Since we started, we have innovated a menu focusing on fresh ingredients, incredible flavor and a budding street food menu.  Come out and enjoy a meal!</p>
      </section>
    </section>
  );
}

export default About;
