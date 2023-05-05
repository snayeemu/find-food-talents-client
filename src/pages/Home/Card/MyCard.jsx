import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaSortNumericUpAlt, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyCard = ({ chef }) => {
  return (
    <div className="col-md-4 mb-2">
      <Col>
        <Card>
          <div className="d-flex justify-content-center">
            <Card.Img className="w-50" variant="top" src={chef.chefPicture} />
          </div>
          <Card.Body className="text-center">
            <Card.Title className="text-success">{chef.chefName}</Card.Title>
            <Card.Text>
              {chef.yearsOfExperience} years of experience,{" "}
              {chef.numberOfRecipes} recipes
              <br />
              <FaThumbsUp className="text-success"></FaThumbsUp>{" "}
              <span className="text-secondary"> 1002 likes</span>
            </Card.Text>
            <Link to={`/recipes/${chef.id}`}>
              <Button variant="success">View Recipes</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default MyCard;
