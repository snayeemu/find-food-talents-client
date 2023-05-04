import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaSortNumericUpAlt, FaThumbsUp } from "react-icons/fa";

const MyCard = ({ chef }) => {
  console.log(chef);
  const { id, chefPicture, numberOfRecipes, yearsOfExperience, chefName } =
    chef;
  return (
    <div className="col-md-4 mb-2">
      <Col>
        <Card>
          <div>
            <Card.Img className="w-50" variant="top" src={chef.chefPicture} />
          </div>
          <Card.Body>
            <Card.Title>{chef.chefName}</Card.Title>
            <Card.Text>
              {chef.yearsOfExperience} years of experience,{" "}
              {chef.numberOfRecipes} recipes
              <br />
              <FaThumbsUp className="text-success"></FaThumbsUp>{" "}
              <span className="text-secondary"> 1002 likes</span>
            </Card.Text>
            <Button variant="success">View Recipes</Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default MyCard;
