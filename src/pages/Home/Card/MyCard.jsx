import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaSortNumericUpAlt, FaThumbsUp } from "react-icons/fa";

const MyCard = ({ chef }) => {
  console.log(chef);
  const { id, chefPicture, numberOfRecipes, yearsOfExperience, chefName } =
    chef;
  return (
    <div className="col-md-4 mb-2">
      <Card style={{ width: "18rem" }}>
        <div>
          <Card.Img className="w-50 rounded" variant="top" src={chefPicture} />
        </div>
        <Card.Body>
          <Card.Title>{chefName}</Card.Title>
          <Card.Text>
            Experience: {yearsOfExperience} years
            <br />
            <FaSortNumericUpAlt className="text-success"></FaSortNumericUpAlt>{" "}
            Recipes: {numberOfRecipes} items
            <br />
            <FaThumbsUp className="text-success"></FaThumbsUp>{" "}
            <span className="text-secondary"> 1002 likes</span>
          </Card.Text>
          <Button variant="success">View Recipes</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyCard;
