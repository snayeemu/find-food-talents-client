import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthContext";

const EmailPassRegistration = () => {
  const { registerUser, profileUpdate } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    setError("");
    console.log({ name, photoUrl, email, password });
    // You can add your form submission logic here
    if (!(email && password)) {
      alert("Email and password is required");
      return;
    }
    registerUser(email, password)
      .then()
      .catch((err) => setError(err.message));
    if (name && photoUrl)
      profileUpdate(name, photoUrl)
        .then(() => {})
        .catch((error) => setError(error.message));
  };
  return (
    <div className="w-25 mx-auto my-5">
      <Form onSubmit={handleRegister}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="mb-4"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="photoUrl">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            className="mb-4"
            type="text"
            placeholder="Enter your photo URL"
            value={photoUrl}
            onChange={(event) => setPhotoUrl(event.target.value)}
          />
        </Form.Group>

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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default EmailPassRegistration;
