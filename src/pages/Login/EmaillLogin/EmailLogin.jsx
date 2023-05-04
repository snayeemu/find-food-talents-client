import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { useAuth } from "../../../contexts/AuthContext";

const EmailLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      await firebase.auth().currentUser.updateProfile({
        displayName: name,
        photoURL: photoURL,
      });
      history.push("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <div>
      <Container className="mt-4">
        <h2 className="mb-4">Log In</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPhotoURL">
            <Form.Label>Profile Picture URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the URL for your profile picture"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              required
            />
          </Form.Group>

          {error && <p className="text-danger">{error}</p>}
          <Button variant="primary" type="submit" disabled={loading}>
            Log In
          </Button>
        </Form>

        <div className="mt-4">
          Need an account? <Link to="/signup">Sign up</Link>
        </div>
      </Container>
    </div>
  );
};

export default EmailLogin;
