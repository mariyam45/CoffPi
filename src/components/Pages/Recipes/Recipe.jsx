import React from "react";

const Recipe = ({ recipe }) => {
  // const recipe = useLoaderData();
  // const{id,recipes,r}

  const { id, recipes, picture, name } = recipe;
  console.log(name);

  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img src={recipes[0].img} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipes[0].name}</h2>
          <p>{name}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
