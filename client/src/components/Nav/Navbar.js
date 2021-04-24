import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faEnvelope,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

const NavbarToggle = () => {
  const { currentUser } = useAuth();

  const navCondition = () => {
    if (currentUser) {
      return (
        <>
          <Link to="/messages">
            <FontAwesomeIcon className="cart-btn" icon={faEnvelope} />
          </Link>
          <Link to="/basket">
            <FontAwesomeIcon className="cart-btn" icon={faCartPlus} />
          </Link>
          <Link to="/create">
            <FontAwesomeIcon className="cart-btn" icon={faPlusSquare} />
          </Link>
        </>
      );
    }
    return (
      <div>
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/signup" className="nav-link">
          Sign Up
        </Link>
      </div>
    );
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav>
        <Nav className="mr-auto condition-nav">{navCondition()}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarToggle;
