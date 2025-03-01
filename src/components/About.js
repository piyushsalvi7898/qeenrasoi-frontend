import React, { useState } from "react"; 
import { Container, Row, Col, Card, Navbar } from "react-bootstrap"; 
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope,  } from "react-icons/fa";
import "./css/about.css"; 
import certificateImage from "../assets/images/certificate.jpg"; 

const About = () => {
  return (
    <>
      <Container fluid className="about-container mt-5 pt-5 text-center">
        <h1 className="about-heading">
          About <span>रसोई Queen</span>
        </h1>
        <p className="about-subheading">PARTH ENTERPRISES</p>
        <p className="about-text">
          Parth Enterprises is a leading manufacturer of <strong>natural, fresh, and pure spices</strong> in Indore (MP).
          We bring authentic flavors to your kitchen with our premium quality products.
        </p>

        {/* Certificate Section */}
        <Container className="certification-section">
          <h3 className="certification-title">Our Certification</h3>
          <div className="certification-wrapper">
            <img src={certificateImage} alt="ZED Bronze Certificate" className="certification-image" />
            <p className="certification-text">
              We are proud to be awarded the <strong>ZED Bronze Certification</strong>, a testament to our commitment to 
              <strong> quality, purity, and sustainability</strong> in the spice industry. This certification reflects our 
              dedication to maintaining <strong>high standards in sourcing, processing, and packaging</strong>.
            </p>
          </div>
        </Container>

        {/* Mission & Vision Section */}
        <Row className="mt-5">
          <Col md={6}>
            <Card className="about-card shadow-lg">
              <Card.Body>
                <h4>Our Mission</h4>
                <p>To provide the highest quality, pure, and fresh spices to enhance the taste of every meal.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="about-card shadow-lg">
              <Card.Body>
                <h4>Our Vision</h4>
                <p>To become a globally recognized brand known for authentic Indian spices and flavors.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      
      </Container>

      {/* Footer */}
      <Navbar bg="dark" variant="dark" className="footer p-4">
        <Container className="d-flex flex-column align-items-center">
          <h5 className="text-light">
            <span className="rasoi">रसोई</span> Queen
          </h5>
          <p className="text-secondary text-center mb-2">
            Authentic flavors, unforgettable taste. Visit us or order online!
          </p>

          <div className="mb-3">
            <a href="#" className="text-light me-3">
              <FaFacebook color="#1877F2" size={30} />
            </a>
            <a href="#" className="text-light me-3">
              <FaInstagram color="#E4405F" size={30} />
            </a>
            <a href="#" className="text-light">
              <FaTwitter color="#1DA1F2" size={30} />
            </a>
          </div>

          <p className="text-secondary small mb-0">
            <FaMapMarkerAlt color="red" /> 409, Agrawal Compound, Khatipura, Sukhlia, Indore, Madhya Pradesh 452011
          </p>
          <p className="text-secondary">
            <FaPhone color="green" /> +91-9630052299 | <FaEnvelope color="orange" /> info@rasoiqueenmasale.com
          </p>

          <span className="text-light small">&copy; 2025 Masala Queen. All Rights Reserved.</span>
        </Container>
      </Navbar>
    </>
  );
};

export default About;
