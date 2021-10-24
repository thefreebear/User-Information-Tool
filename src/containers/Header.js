//import "./App.css";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className="Links" to="/">
              <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon> User
              Information{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" />
              {/* <Nav.Link href="features">Features</Nav.Link>
              <Nav.Link href="pricing">Pricing</Nav.Link> 
            </Nav> */}
            <Nav>
              <Nav.Link>
                <Link className="Links" to="/about">
                  About Us{" "}
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
