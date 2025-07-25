import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Settings from "@pages/Settings";
import MainLayout from "../layouts/MainLayout";
import NotFound from "@pages/NotFound";
import Dashboard from "../pages/Dashboard";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Redirect base path to /dashboard */}
        <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
