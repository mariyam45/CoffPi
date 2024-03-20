import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Chefs from "../Chefs/Chefs";
import Recipes from "../Recipes/Recipes";

const Home = () => {
  const chefs = useLoaderData();
  console.log(chefs);

  return (
    <div className="">
      <Banner></Banner>
      <Chefs chefs={chefs}></Chefs>
      <Recipes></Recipes>
    </div>
  );
};

export default Home;
