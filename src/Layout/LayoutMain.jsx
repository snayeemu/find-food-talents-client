import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/shared/NavigationBar/NavigationBar";

const LayoutMain = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </div>
  );
};

export default LayoutMain;
