import React from "react";
import '../../Style/Footer.css'
const data = [
  {id:1, heading: "address:",location: "Saint Louis Park MN" },
  {id:2, tel: "Tel:",phone: 6122222222 },
  {id:3, hours: "hours:",phone: 6122222222 },
];
function Footer() {
  return (
    <footer>
      <div className="grid3 container">
        <address>
         <h3>Address:</h3>
          <p className="address">Saint Louis Park MN</p>
        </address>
        <div className="contact-footer">
          <h3 className="tel-heading">Tel:</h3>
          <a href="tel:6122222222" className="telephone">Tel: 6122222222</a>
        </div>
        <div className="hours">
          <h3>Hours:</h3>
          <p>MON - THURS: 11 am - 8 pm</p>
          <p>FRIDAY: 11am - 8pm</p>
          <p>SATURDAY: 11am - 8pm​</p>
          <p>​SUN: Closed</p>
        </div>
      </div>
      <p className="company">©2022 Somali and Gyro Resturant.</p>
    </footer>
  );
}

export default Footer;
