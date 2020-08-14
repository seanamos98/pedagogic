import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookReader } from "@fortawesome/free-solid-svg-icons/faBookReader";
import {
  Nav,
  Form,
  FormControl,
  Button,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import AuthService from "../services/auth.service";

const NavbarComponents = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      <Navbar className="navbar" bg="light" fixed="top" expand="md">
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faBookReader} className="icon-brand  " />
          <span className="text-dark font-weight-bold ">pedagog</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className="text-dark">
              Home
            </Nav.Link>
            <NavDropdown title="Courses " id="basic-nav-dropdown">
              <NavDropdown.Item className="" href="/courses">
                Course Page
              </NavDropdown.Item>
              <NavDropdown.Item href="/courses/add">
                Course Form
              </NavDropdown.Item>

              <NavDropdown.Item href="/courses/:id">
                Course List
              </NavDropdown.Item>
            </NavDropdown>
            {showAdminBoard && (
              <Nav.Link href="/admin" className="text-light">
                Admin Board
              </Nav.Link>
            )}

            {currentUser && (
              <Nav.Link href="/user" className="text-light">
                User
              </Nav.Link>
            )}
            <NavDropdown title="Login | Signup" id="basic-nav-dropdown">
              {currentUser ? (
                <div>
                  <NavDropdown.Item href="/profile" className="text-dark">
                    {currentUser.username}
                  </NavDropdown.Item>

                  <a href="/login" onClick={logOut}>
                    LogOut
                  </a>
                </div>
              ) : (
                <div>
                  <NavDropdown.Item href="/login" className="text-dark">
                    Login
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/signup" className="text-dark">
                    Sign Up
                  </NavDropdown.Item>
                </div>
              )}
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              width="50%"
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button variant="outline-success" className="btn">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavbarComponents;
