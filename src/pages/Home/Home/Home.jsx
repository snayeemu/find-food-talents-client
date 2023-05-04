import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../../shared/Footer/Footer";
import Banner from "../Banner/Banner";
import MyCard from "../Card/MyCard";
import HowItWorks from "../HowItWorks/HowItWorks";
import Testimonies from "../Testimonies/Testimonies";

const Home = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="row container my-5 mx-auto">
        <h2 className="text-success text-center">Our Chefs:</h2>
        {chefs.map((chef) => (
          <MyCard key={chef.id} chef={chef}></MyCard>
        ))}
      </div>
      <HowItWorks></HowItWorks>
      <Testimonies></Testimonies>
      <Footer></Footer>
    </div>
  );
};

export default Home;
