import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../../shared/Footer/Footer";
import Banner from "../Banner/Banner";
import MyCard from "../Card/MyCard";
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
      <div className="row container my-5">
        {chefs.map((chef) => (
          <MyCard key={chef.id} chef={chef}></MyCard>
        ))}
      </div>
      <Testimonies></Testimonies>
      <Footer></Footer>
    </div>
  );
};

export default Home;
