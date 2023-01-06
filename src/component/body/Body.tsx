import React, { useContext } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { AuthContext } from "../../App";
import AuthHome from "../AuthHome";
import Home from "../home";
import MyRecord from "../MyRecord";
import './Body.scss';

const ProtectedRoute = ({ children }: { children: any }) => {
  const isLogged = useContext(AuthContext);
  const location = useLocation();

  if (!isLogged) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};

const RedirectRoute = ({ children }: { children: any }) => {
  const isLogged = useContext(AuthContext);

  if (isLogged) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

const Body = () => {
  return (
    <div className="body">
      <Routes>
        <Route index element={
          <RedirectRoute>
            <Home />
          </RedirectRoute>
        } />
        <Route path="home" element={
          <ProtectedRoute>
            <AuthHome />
          </ProtectedRoute>
        } />
        <Route path="my-record" element={
          <ProtectedRoute>
            <MyRecord />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  )
}

export default Body;
