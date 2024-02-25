import React from "react";
import Recipe from "./Recipe";

const Recipes = () => {
  return (
    <div className="w-5/6 mx-auto mt-20 text-center">
      <h2 className="text-3xl font-extrabold mb-10">Our Popular Recipes </h2>
      <div className="recipes_cont grid grid-cols-3 gap-10  ">
        <Recipe></Recipe>
        <Recipe></Recipe>
        <Recipe></Recipe>
        <Recipe></Recipe>
      </div>
    </div>
  );
};

export default Recipes;
