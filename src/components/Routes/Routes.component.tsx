import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import RegisterFields from "../../pages/Register/RegisterFields";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register-fields" element={<RegisterFields />} />
        <Route path="*" element={<Navigate to="/register-fields" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesApp;
