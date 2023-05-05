import React from "react";

const NotFound = () => {
  return (
    <div>
      <div className="d-flex my-3">
        <img
          className="img-fluid w-25 mx-auto rounded shadow-lg"
          src={
            "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2029&q=80"
          }
          alt=""
        />
      </div>
      <div>
        <img
          className="img-fluid w-100"
          src={
            "https://www.cloudways.com/blog/wp-content/uploads/404-error-cloudways-landing-page.png"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default NotFound;
