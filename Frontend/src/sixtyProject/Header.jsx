import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import DashboardHeader from "./DashboardHeader";

const Header = ({ user }) => {
  let navigate = useNavigate();

  return (
    <>{user ? <DashboardHeader user={user} /> : <HomeHeader user={user} />}</>
  );
};

export default Header;
