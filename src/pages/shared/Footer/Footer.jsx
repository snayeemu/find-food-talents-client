import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaMailBulk, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="position-relative">
      <footer className="bg-light py-4 position-sticky sticky-bottom">
        <Container>
          <Row>
            <Col md={4}>
              <h4>About Us</h4>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                accumsan enim euismod, ultrices tellus eu, cursus leo. Nullam
                eget efficitur purus.
              </p>
            </Col>
            <Col md={4}>
              <h4>Quick Links</h4>
              <ul className="list-unstyled ">
                <li>
                  <Link className="text-decoration-none text-secondary" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-secondary"
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-secondary"
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li>
                  <FaMapMarkedAlt /> 123 Main Street, Anytown USA
                </li>
                <li>
                  <FaPhoneAlt></FaPhoneAlt> 555-555-1212
                </li>
                <li>
                  <FaMailBulk></FaMailBulk> info@example.com
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="text-center py-3 bg-white">
          <p>
            Copyright © 2023
            <Link className="text-decoration-none text-secondary" to="/">
              {" "}
              Chef Finder
            </Link>{" "}
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
