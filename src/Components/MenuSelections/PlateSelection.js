import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const PlateSelection = (props) => {

  return (
    <div style={props.style}>
        <h3 className="text-align menu-option mt-2">Main Plate</h3>
        <p className="text-align menu-subheading mt-2">All plates come with choice of rice or french fries, pita, salad and sauce.</p>
       <Container>
        <Row className="grid2 mt-2">
          <Col>
          <div className="menu-item">
          <h5 className="menu-selection">
            <span className="star"> <ion-icon name="star-outline"></ion-icon></span>
            Pistachio Baklava<span className="price">$2</span>
            </h5>
            <p className="menu-description">Honey, rose water, phyllo dough, walnuts, pistachios all layered to make a heavenly treat.</p>
          </div>
          <div className="menu-item">
          <h5 className="menu-selection">
            <span className="star"> <ion-icon name="star-outline"></ion-icon></span>
            Loukoumades (Greek Donut)<span className="price">$7</span>
            </h5>
            <p className="menu-description">Freshly Fried Traditional Greek Donuts Made To Order, Offered In Three Different Flavors!</p>
          </div>
          </Col>
          <Col>
          <div className="menu-item">
          <h5 className="menu-selection">
          Turkish Delights Variety Mix<span className="price">$3</span>
            </h5>
            <p className="menu-description">Variety of our delicious Turkish Delights Mixed Fruit Mixed Chocolate & Fruit Mixed Peanut Mixed Nuts</p>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PlateSelection