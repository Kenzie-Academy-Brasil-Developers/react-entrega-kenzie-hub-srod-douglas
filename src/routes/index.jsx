import { Routes, Route } from "react-router-dom";
import React from "react";
import RegisterPage from "../pages/register";
import LoginPage from "../pages/login";
import DashboardPage from "../pages/dashboard";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" index element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard/:id" element={<DashboardPage />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};

export default AllRoutes;
