import React from "react";
import "../../Style/Menu.css";
import PlateSelection from "../MenuSelections/PlateSelection";
import Halal from "../../Assets/halal.jpg";
import { Parallax } from "react-parallax";
import AppetizerSelection from "../MenuSelections/AppetizerSelection";
import DesertSelection from "../MenuSelections/DesertSelection";
const style= {
  margin: "0 0 10rem 0",
};
const insideStyles = {
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};
function Menu() {
  return (
    <section>
      <Parallax bgImage={Halal}>
        <div style={{ height: 500 }}>
          <div style={insideStyles} className="heading-primary">
            Menu
          </div>
        </div>
      </Parallax>
    <PlateSelection style={style}/>
    <AppetizerSelection style={style}/>
    <DesertSelection style={style}/>
    </section>
  );
}

export default Menu;
