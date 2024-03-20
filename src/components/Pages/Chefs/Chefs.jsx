import React from "react";
import Chef from "./Chef";

const Chefs = ({ chefs }) => {
  console.log(chefs);
  return (
    <div className="my-20  mx-auto">
      <h2 className="font-extrabold text-center my-10  text-4xl">Our Chefs</h2>
      <div className="grid grid-cols-3 mx-20 2xl:mx-96 2xl:gap-20 gap-6">
        {chefs.map((chef) => chef.map((c) => <Chef c={c} key={c.id}></Chef>))}
      </div>
    </div>
  );
};

export default Chefs;
