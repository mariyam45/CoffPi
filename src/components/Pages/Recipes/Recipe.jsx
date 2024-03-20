import React from "react";

const Recipe = ({ eachRecipe }) => {
  console.log(eachRecipe);
  return (
    <div>
      {/* <h2>{r.id}</h2> */}
      <h2>{eachRecipe.name}</h2>

      {}
    </div>
  );
};

export default Recipe;
