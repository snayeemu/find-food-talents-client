import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

const LoginOptions = () => {
  const { handleGoogleLogin, handleGitLogin } = useContext(AuthContext);

  const navigateToRecipes = () => {
    return <Navigate to="/recipes/1" replace={true} />;
  };

  const googleLogin = () => {
    handleGoogleLogin()
      .then((result) => {})
      .catch();
  };

  const gitLogin = () => {
    handleGitLogin()
      .then()
      .catch();
  };

  return (
    <div className="">
      <div className="container my-5 text-center">
        <h2 className="text-success">Please Login:</h2>
        <div className="d-flex flex-column">
          <Link to="/email-login">
            <Button variant="outline-primary" className="mb-3">
              Email/Password
            </Button>
          </Link>
          <Link onClick={googleLogin}>
            <Button variant="outline-danger" className="mb-3">
              Google Sign-in
            </Button>
          </Link>
          <Link onClick={gitLogin}>
            <Button variant="outline-dark" className="mb-3">
              GitHub Sign-in
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="outline-secondary">
              Don't have an account? Register here.
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginOptions;
