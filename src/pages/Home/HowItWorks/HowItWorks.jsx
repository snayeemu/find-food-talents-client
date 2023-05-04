import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

const HowItWorks = () => {
  return (
    <div>
      <Container className="my-5 py-5 ">
        <h2 className="text-center mb-3 text-success">How It Works:</h2>
        <Row className="mb-5">
          <Col lg={3} className="d-md-flex justify-content-end">
            <Image
              className="w-75"
              src={
                "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              fluid
            />
          </Col>
          <Col lg={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-success">
                  Search for a Chef
                </Card.Title>
                <Card.Text>
                  Find the perfect chef for your needs by searching our
                  extensive database of culinary experts. Filter by cuisine,
                  location, price, and more to find the right chef for you.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col lg={3} className="d-md-flex justify-content-end">
            <Image
              className="w-75"
              src={
                "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              fluid
            />
          </Col>
          <Col lg={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-success">Book Your Chef</Card.Title>
                <Card.Text>
                  Once you've found a chef you like, simply book them through
                  our website. You'll receive confirmation of your booking and
                  can communicate with your chef directly to discuss your
                  requirements.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col lg={3} className="d-md-flex justify-content-end">
            <Image
              className="w-75"
              src={
                "https://images.unsplash.com/photo-1523289234383-e85c07f374db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              }
              fluid
            />
          </Col>
          <Col lg={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-success">
                  Enjoy Your Meal
                </Card.Title>
                <Card.Text>
                  Sit back, relax, and let your chef take care of everything.
                  You'll enjoy a delicious meal prepared to your exact
                  specifications, without any of the stress or hassle of cooking
                  yourself.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HowItWorks;
