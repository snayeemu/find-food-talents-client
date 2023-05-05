import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import Banner from "../Banner/Banner";
import MyCard from "../Card/MyCard";
import HowItWorks from "../HowItWorks/HowItWorks";
import Testimonies from "../Testimonies/Testimonies";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://find-food-talent-server-snayeemu.vercel.app/")
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Spinner
        className={`${!isLoading && "d-none"}`}
        animation="border"
        variant="success"
      />
      <div className="row container my-5 mx-auto">
        <h2 className="text-success text-center">Our Chefs:</h2>
        {chefs.map((chef) => (
          <MyCard key={chef.id} chef={chef}></MyCard>
        ))}
      </div>
      <HowItWorks></HowItWorks>
      <Testimonies></Testimonies>
    </div>
  );
};

export default Home;
