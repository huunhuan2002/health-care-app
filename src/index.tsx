import React from 'react';
import './index.scss';
import App from './App';
import Home from './component/home';
import AuthHome from './component/AuthHome';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <AuthHome />
      }
    ]
  }
])

const root = document.getElementById('root') as HTMLElement
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
