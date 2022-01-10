import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";

import { Contexts } from "../../Contexts/AuthenticationContext";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
function Navigation() {
  const {
    setIsUserLoggedIn,
    token,
    userIsLoggedInWithToken,
    isContentAvailable,
  } = useContext(Contexts);
  const userLogut = () => {
    setIsUserLoggedIn(null);
    history.replace("/");
  };
// const userList = isContentAvailable["post"]["following"];
  const history = useHistory();
  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#">Navbar </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Button onClick={userLogut}>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Logout
              </Offcanvas.Title>
            </Button>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav> */}
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            {/* {
              userList.map((e) => {
                <li>{e}</li>
              })
            } */}
            
          </Offcanvas.Body>
          
        </Navbar.Offcanvas>
        
      </Container>
    </Navbar>
  );
}

export default Navigation;
