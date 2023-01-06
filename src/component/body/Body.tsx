import React from "react";
import { Outlet } from "react-router-dom";
import './Body.scss';

const Body = () => {
  return (
    <div className="body">
      <Outlet />
    </div>
  )
}

export default Body;
