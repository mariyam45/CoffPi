import React, { useEffect, useState } from "react";

const Recipe = () => {
  // const recipe = useLoaderData();
  // const{id,recipes,r}

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
