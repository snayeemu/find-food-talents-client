import React, { useState } from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import "./NavigationBar.css";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.email, user?.displayName);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="position-relative">
      <Navbar
        className="position-sticky top-0"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Link
            className="m fw-bolder text-success border border-success rounded px-2 bg-success bg-opacity-10 text-decoration-none py-1"
            to="/"
          >
            FindFoodTalents
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-primary text-decoration-none mx-3"
                    : isPending
                    ? "text-secondary"
                    : "text-secondary text-decoration-none mx-3"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-primary text-decoration-none mx-3"
                    : isPending
                    ? "text-secondary"
                    : "text-secondary text-decoration-none mx-3"
                }
              >
                Blog
              </NavLink>
            </Nav>
            <Nav>
              {user && (
                <img
                  className="nav-img-width img-fluid rounded-circle "
                  title={user?.name}
                  src={
                    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  }
                  alt=""
                />
              )}
              {!user ? (
                <Link to="/login">
                  <button className="btn  ms-3 btn-outline-success">
                    Login
                  </button>
                </Link>
              ) : (
                <Link onClick={handleLogOut}>
                  <button className="btn  ms-3 btn-outline-success">
                    Logout
                  </button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
