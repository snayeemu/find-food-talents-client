import React, { useContext } from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

const EmailLogin = () => {
  const { loginUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    // You can add your form submission logic here
    if (!(email && password)) {
      alert("Please enter your email and password");
      return;
    }
    loginUser(email, password)
      .then()
      .catch((err) => setError(err.message));
  };
  return (
    <div className="w-25 mx-auto">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="mb-4"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="mb-4"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
      <p className="text-danger">{error}</p>
      <p>
        <small>
          Don't have an account?{" "}
          <Link to="/email-pass-reg">Please Register</Link>
        </small>
      </p>
    </div>
  );
};

export default EmailLogin;
