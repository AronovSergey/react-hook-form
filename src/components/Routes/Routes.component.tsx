import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { sidebarMenuItems } from "../Sidebar/Sidebar.data";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        {sidebarMenuItems.map((item, index) => (
          <Route key={index} path={item.path} element={<item.component />} />
        ))}
        <Route path="*" element={<Navigate to="/register-fields" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesApp;
