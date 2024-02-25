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
      },
      {
        path: "/recipes",
        element: <Recipes></Recipes>,
        children: [
          {
            path: ":id",
            element: <Recipe></Recipe>,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/chefs/${params.id}`),
          },
        ],
      },
    ],
  },
]);

export default route;
