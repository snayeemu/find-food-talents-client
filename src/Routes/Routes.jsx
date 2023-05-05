import { createBrowserRouter } from "react-router-dom";
import LayoutMain from "../Layout/LayoutMain";
import EmailPassRegistration from "../pages/EmailPassRegistration/EmailPassRegistration";
import Home from "../pages/Home/Home/Home";
import EmailLogin from "../pages/Login/EmaillLogin/EmailLogin";
import LoginOptions from "../pages/Login/LoginOptions/LoginOptions";
import NotFound from "../pages/NotFound/NotFound";
import Footer from "../pages/shared/Footer/Footer";
import NavigationBar from "../pages/shared/NavigationBar/NavigationBar";
import ShowRecipes from "../pages/ShowRecipes/ShowRecipes";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <ShowRecipes></ShowRecipes>
          </PrivateRoute>
        ),
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
        <NotFound></NotFound>
        <Footer></Footer>
      </>
    ),
  },
]);

export default router;
