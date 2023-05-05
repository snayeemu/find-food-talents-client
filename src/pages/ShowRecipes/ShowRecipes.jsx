import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const ShowRecipes = () => {
  const chef = useLoaderData();
  const { chefPicture, chefName, bio, likes, numberOfRecipes } = chef;
  return (
    <div>
      <Card className="bg-light mb-5 py-3 ">
        <Row className="container mx-auto ">
          <Col className=" d-md-flex justify-content-center" xs={12} md={4}>
            <Image
              className="w-50  "
              src={chefPicture}
              alt={chefName}
              roundedCircle
              fluid
            />
          </Col>
          <Col xs={12} md={8}>
            <Card.Body>
              <Card.Title className="text-success fw-bold">
                {chefName}
              </Card.Title>
              <Card.Text>{bio}</Card.Text>
              <Row>
                <Col>
                  <Card.Subtitle className="mb-2 text-muted">
                    {likes} Likes
                  </Card.Subtitle>
                </Col>
                <Col>
                  <Card.Subtitle className="mb-2 text-muted">
                    {numberOfRecipes} Recipes
                  </Card.Subtitle>
                </Col>
                <Col>
                  <Card.Subtitle className="mb-2 text-muted">
                    {numberOfRecipes} Years Experience
                  </Card.Subtitle>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Container className="my-3 ">
        <h2 className="text-success ">Recipes:</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {chef.recipes.map((recipe, index) => (
            <Col key={index}>
              <Card>
                <Card.Body>
                  <Card.Title className="text-success">{recipe}</Card.Title>
                  <h6 className="mt-4">Ingredients: </h6>
                  <div className="ms-5">
                    {chef.ingredients[index].map((ingredient, index) => (
                      <span className="text-secondary" key={index}>
                        {ingredient + ", "}
                      </span>
                    ))}
                  </div>
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
