import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

const Testimonies = () => {
  return (
    <div className="container my-5">
      <h2>Testimonials:</h2>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={
              "https://plus.unsplash.com/premium_photo-1661486971635-b79537d79d97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80"
            }
            alt="Testimonial 1"
          />
          <Carousel.Caption>
            <h3 className="text-bg-dark rounded py-1">John Doe</h3>
            <p>
              "I found my dream chef using this website. Thank you so much!"
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={
              "https://plus.unsplash.com/premium_photo-1661486971635-b79537d79d97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80"
            }
            alt="Testimonial 2"
          />
          <Carousel.Caption>
            <h3 className="text-bg-dark rounded py-1">Jane Smith</h3>
            <p>
              "The chefs I hired from this website were all amazing. Highly
              recommended!"
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={
              "https://plus.unsplash.com/premium_photo-1661486971635-b79537d79d97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80"
            }
            alt="Testimonial 3"
          />
          <Carousel.Caption>
            <h3 className="text-bg-dark rounded py-1">Tom Brown</h3>
            <p>
              "I never knew finding a chef could be this easy. This website is a
              game-changer!"
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonies;
