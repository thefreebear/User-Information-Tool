import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import MyButton from "../components/MyButton";

const ContactUs = () => {
  return (
    <div className="FormHead">
      <div className="FormMain">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Full Name</Form.Label>
            <Form.Control required type="Name" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Please leave your message here</Form.Label>
            <Form.Control as="textarea" rows={7} />
          </Form.Group>
          <Form.Group >
            <MyButton ButtonName={"Submit"} />
          </Form.Group>
        </Form>
      </div>
      <div className="OtherIcon">
          <FontAwesomeIcon  icon={faPhoneAlt} size="10x" />
      </div>
    </div>
  );
};

export default ContactUs;
