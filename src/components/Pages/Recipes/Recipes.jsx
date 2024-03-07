import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="w-5/6 mx-auto mt-20 text-center">
      <h2 className="text-3xl font-extrabold mb-10">Our Popular Recipes </h2>
      <div className="recipes_cont grid grid-cols-3 gap-10  ">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
