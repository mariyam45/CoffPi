import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";

const Recipes = () => {
  // const { id } = useParams();
  const allRecipes = useLoaderData();
  console.log(allRecipes);
  // console.log(allRecipes);
  // const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/chefs")
  //     .then((res) => res.json())
  //     .then((data) => setRecipes(data))
  //     .catch((error) => console.log(error));
  // }, []);
  return (
    <div className="w-5/6 mx-auto mt-20 text-center">
      <h2 className="text-3xl font-extrabold mb-10">Our Popular Recipes </h2>
      <div className="recipes_cont grid grid-cols-3 gap-10  ">
        {allRecipes.map((recipe) =>
          recipe.map((r) =>
            r.recipes.map((eachRecipe) => (
              <Recipe eachRecipe={eachRecipe}></Recipe>
            ))
          )
        )}
      </div>
    </div>
  );
};

export default Recipes;
