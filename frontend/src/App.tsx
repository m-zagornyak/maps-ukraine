import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { AuthPage } from "./pages/AuthPage/AuthPage";
import { HomePage } from "./pages/HomePage/HomePage"
import { ROUTES } from "./utils/constants/routes";


export const AuthApp = () => (
  <Routes>
    <Route path={ROUTES.AUTH} element={<AuthPage />} />
    <Route path='*' element={<Navigate to={ROUTES.AUTH} />} />
  </Routes>
);

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.AUTH} element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  )
};
export default App
