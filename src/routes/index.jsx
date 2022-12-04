import { Routes, Route } from "react-router-dom";
import React from "react";
import RegisterPage from "../pages/register";
import LoginPage from "../pages/login";
import DashboardPage from "../pages/dashboard";

export const AllRoutes = () => {

  return (

    <Routes>

      <Route path="/login" index element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/dashboard" >

        <Route path=":userId" element={<DashboardPage />}/>

      </Route>

      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};