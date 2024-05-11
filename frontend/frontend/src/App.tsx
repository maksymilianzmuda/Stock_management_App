import { Outlet } from "react-router";

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/useAuth";
import React from "react";

function App() {
  return (
    <>
      <UserProvider>
        
        <Outlet />
        <ToastContainer />
      </UserProvider>
    </>
  );
}

export default App;