import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const Banner = () => {
  return (
    <section className="bg-light py-5 my-5">
      <Container className="">
        <Row className="d-flex">
          <Col md={7}>
            <h1 className="text-success">
              Find the Perfect Chef for Your Next Event
            </h1>
            <p>
              Looking for a talented chef to cater your next event or dinner
              party? Look no further! Our chef finder website makes it easy to
              find the perfect chef for your needs. Browse our extensive list of
              top-rated chefs, filter by cuisine, location, availability and
              more.
            </p>
            <Link to="/blog">
              <Button variant="success" size="lg" className="mt-3">
                Learn More
              </Button>
            </Link>
          </Col>
          <Col md={5} className="d-md-flex justify-content-end mt-2">
            <img
              src={
                "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=377&q=80"
              }
              alt="Chef cooking in kitchen"
              className="img-fluid w-50 rounded-5 "
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
