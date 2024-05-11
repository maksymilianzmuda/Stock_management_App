import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/LoginPage/LoginPage"
import React from "react";
import LoginPage from "../Pages/LoginPage/LoginPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
      { path: "login", element: <LoginPage /> },
      
      
    ],
  },
]);
export default App