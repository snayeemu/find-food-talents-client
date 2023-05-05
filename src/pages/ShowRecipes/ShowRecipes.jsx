import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ShowRecipes = () => {
  const recipes = useLoaderData();
  return (
    <div>
      <Container className="my-3">
        <Row xs={1} md={2} lg={3} className="g-4">
          {recipes.map((recipe, index) => (
            <Col key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>{recipe}</Card.Title>
                  <Link to={`/recipes/details`}>
                    <Button variant="primary">View Recipe</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ShowRecipes;
