import { createBrowserRouter } from "react-router-dom";
import LayoutMain from "../Layout/LayoutMain";
import Home from "../pages/Home/Home/Home";
import EmailLogin from "../pages/Login/EmaillLogin/EmailLogin";
import LoginOptions from "../pages/Login/LoginOptions/LoginOptions";
import NavigationBar from "../pages/shared/NavigationBar/NavigationBar";

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
