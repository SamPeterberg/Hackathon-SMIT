import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoanForm from "../pages/LoanForm";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/loanform" element={<LoanForm />} />
    </Routes>
  );
};

export default RoutesConfig;
