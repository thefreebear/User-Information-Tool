import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import * as CONST from "../constants";
const Cards = ({ CardText, CardTitle, CardImage, ButtonProp }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{CardTitle}</Card.Title>
        <Card.Text>{CardText}</Card.Text>
        <Link
          className="Links"
          to={ButtonProp === CONST.ADD ? "/adduser" : "/users"}
        >
          <Button variant="secondary">{CardImage}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Cards;
