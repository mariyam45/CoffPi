import React from "react";
import { Link } from "react-router-dom";

const Chef = ({ c }) => {
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img src={c.picture} alt="car!" className="h-96 w-100" />
        </figure>
        <div className=" my-8 mx-4 flex ">
          <div className="flex-auto w-4/5">
            <h2 className="card-title">{c.chef_name}</h2>
            <p>Experience : {c.years_of_experience} years</p>
            <p>Total Recipes : {c.recipes.length}</p>
          </div>
          <div className="card-actions  flex-auto w-1/5 ">
            <Link to={`/recipes/${c.id}`} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
