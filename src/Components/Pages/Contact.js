import React from 'react'
import Dining from '../../Assets/Dining.jpg'
import { Parallax } from "react-parallax";
import Container from 'react-bootstrap/Container';
import ContactImg from '../../Assets/Contact.jpg'

import '../../Style/Contact.css'
import FormPage from '../Form/Form';
function Contact() {

  const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };


  return (
    <div>
        <Parallax bgImage={Dining}>
        <div style={{ height: 500 }}>
          <div style={insideStyles} className="heading-primary">
            Contact Us
          </div>
        </div>
      </Parallax>
      <section className="contact-section">
        <h4 className="contact-heading text-align">Get in Touch</h4>
        <p className="contact-description text-align">Local, Fresh, and Friendly</p>
        <Container>
          <img src={ContactImg} className="img-"/>
        </Container>
        <h5 className="contact-us text-align">Contact Us Today</h5>
        <Container>
          <FormPage/>
        </Container>
      </section>
    </div>
  )
}

export default Contact