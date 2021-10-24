import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class EditUserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="FormHead">
        <div className="FormMain">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="name" placeholder="Name" value={this.props.UserName} />
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
      </div>
    );
  }
}

export default EditUserDetails;
