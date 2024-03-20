import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Recipe from "../Pages/Recipes/Recipe";
import Recipes from "../Pages/Recipes/Recipes";
import Main from "../layout/Main";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/chefs`),
      },
      // {
      //   path: "/chefs",
      //   element: <Chefs></Chefs>,
      //   children: [

      //   ],
      // },

      {
        path: "/recipes/",
        element: <Recipes></Recipes>,
        loader: () => fetch(`http://localhost:5000/chefs`),
      },
      {
        path: "/recipes/:id",
        element: <Recipe></Recipe>,
      },
    ],
  },
]);

export default route;
