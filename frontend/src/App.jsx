import React from "react";
import RegisterForm from "./components/RegisterForm";
import DreamCompaniesGrid from "./components/DreamCompaniesGrid";
import PlacedStudents from "./components/PlacedStudents";
import Footer from "./components/Footer";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  );
}

export default App;
