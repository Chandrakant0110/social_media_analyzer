import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";

const MainLayout: React.FC = () => {
  return (
    <div className="relative">
      <Header />

      <Outlet />
    </div>
  );
};

export default MainLayout;
