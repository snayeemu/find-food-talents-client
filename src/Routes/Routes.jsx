import { createBrowserRouter } from "react-router-dom";
import LayoutMain from "../Layout/LayoutMain";
import EmailPassRegistration from "../pages/EmailPassRegistration/EmailPassRegistration";
import Home from "../pages/Home/Home/Home";
import EmailLogin from "../pages/Login/EmaillLogin/EmailLogin";
import LoginOptions from "../pages/Login/LoginOptions/LoginOptions";
import NavigationBar from "../pages/shared/NavigationBar/NavigationBar";
import ShowRecipes from "../pages/ShowRecipes/ShowRecipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain></LayoutMain>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LoginOptions></LoginOptions>,
      },
      {
        path: "/email-login",
        element: <EmailLogin></EmailLogin>,
      },
      {
        path: "/recipes/:id",
        element: <ShowRecipes></ShowRecipes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipes/${params.id}`),
      },
      {
        path: "/recipes/details",
        element: <h1 className="text-success text-center">Coming</h1>,
      },
      {
        path: "/email-pass-reg",
        element: <EmailPassRegistration></EmailPassRegistration>,
      },
    ],
  },
  {
    path: "*",
    element: (
      <>
        <NavigationBar></NavigationBar>
        <h1>4004</h1>
      </>
    ),
  },
]);

export default router;
