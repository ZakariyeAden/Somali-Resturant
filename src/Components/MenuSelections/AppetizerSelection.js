import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const AppetizerSelection = (props) => {
  
  return (
    <div style={props.style}>
        <h3 className="text-align menu-option">Appetizers</h3>
      <Container>
        <Row className="grid2 mt-2">
          <Col>
          <div className="menu-item">
          <h5 className="menu-selection">
            <span className="star"> <ion-icon name="star-outline"></ion-icon></span>
              Street Doner French Fries<span className="price">$11</span>
            </h5>
            <p className="menu-description">Battered French Fries topped with garlic yogurt, spicy feta, feta cheese, choice gyro meat, chicken shawarma or falafel, pickled sumac onions & fresh mint Sub Steak: +$2</p>
          </div>
          <div className="menu-item">
          <h5 className="menu-selection">
            <span className="star"> <ion-icon name="star-outline"></ion-icon></span>
            Roasted Red Pepper Feta Spread<span className="price">$6.25</span>
            </h5>
            <p className="menu-description">Blend of greek cheeses with roasted red pepper, sun dried tomato and spices, served with seasoned pita bread</p>
          </div>
          <div className="menu-item">
          <h5 className="menu-selection">
            <span className="star"> <ion-icon name="star-outline"></ion-icon></span>
            Zuchinni Crisp Chips<span className="price">$6</span>
            </h5>
            <p className="menu-description">Lightly breaded and coated with seasoned bread crumbs with greek spices. Crispy and delicious served with Greek Yogurt Tzatziki dipping sauce</p>
          </div>
          </Col>
          <Col>
          <div className="menu-item">
          <h5 className="menu-selection">
          Fiery Feta French Fries<span className="price">$6.50</span>
            </h5>
            <p className="menu-description">Spicy whipped feta cheese smothered on our crispy french fries, with greek spices</p>
          </div>
          <div className="menu-item">
          <h5 className="menu-selection">
          Hummus<span className="price">$6</span>
            </h5>
            <p className="menu-description">Garbanzo beans blended with tahini, lemon juice, sea salt turned into creamy perfection. Served with grilled pita bread.</p>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AppetizerSelection