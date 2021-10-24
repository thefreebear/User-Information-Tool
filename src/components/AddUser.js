import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import MyButton from "./MyButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

class AddUser extends Component {
  render() {
    return (
      <div className="FormHead">
        <div className="FormMain">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="name" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control placeholder="+91 00000 00000" />
            </Form.Group>
            <Form.Group></Form.Group>
          </Form>
        </div>
        <div className="OtherIcon">
          <FontAwesomeIcon icon={faUserPlus} size="10x" />
        </div>
      </div>
    );
  }
}
export default AddUser;
