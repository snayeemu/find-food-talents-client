import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h1 className="text-center mb-5 text-success">
              Welcome to My Blogs
            </h1>
            <div className="card mb-5">
              <div className="card-body">
                <h5 className="card-title">
                  What is the differences between uncontrolled and controlled
                  components?
                </h5>
                <p className="card-text">
                  Uncontrolled components are like a black box - they handle
                  their own state internally and can be difficult to access or
                  modify from outside the component. We use them when we don't
                  need to manage the component state outside of the component.
                  <br />
                  Controlled components, on the other hand, are like a white box
                  - we manage and pass down the state to the component via
                  props. We use them when we need to have full control over the
                  component state from outside the component.
                </p>
              </div>
            </div>
            <div className="card mb-5">
              <div className="card-body">
                <h5 className="card-title">
                  How to validate React props using PropTypes?
                </h5>
                <p className="card-text">
                  PropTypes is a way to validate the props passed to a React
                  component. We define the expected data types and ensure that
                  the props passed to the component conform to these
                  expectations.
                </p>
              </div>
            </div>
            <div className="card mb-5">
              <div className="card-body">
                <h5 className="card-title">
                  What is the the difference between nodejs and express js?
                </h5>
                <p className="card-text">
                  Node.js is a JavaScript runtime built on top of Chrome's V8
                  engine. It allows us to run JavaScript on the server-side,
                  outside of the browser. We can use it to build web
                  applications, APIs, and other server-side applications.
                  <br />
                  Express.js is a web framework built on top of Node.js. It
                  provides a set of tools and features for building web
                  applications, APIs, and other server-side applications. It
                  makes it easier to handle requests and responses, parse data,
                  and handle errors.
                </p>
              </div>
            </div>
            <div className="card mb-5">
              <div className="card-body">
                <h5 className="card-title">
                  What is a custom hook, and why will you create a custom hook?
                </h5>
                <p className="card-text">
                  A custom hook is a JavaScript function that we can create and
                  use in our React components to abstract and reuse logic that
                  we would otherwise have to write repeatedly. We use custom
                  hooks to keep our code clean, modular, and easier to maintain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
