import React, { Suspense, useEffect } from "react";
import LoadingComponent from "../src/Component/loadingComponent/loadingComponent";
import { Route, Routes, useNavigate } from "react-router-dom";
import FormComponent from "../src/pages/Form/FormComponent";
import HomePage from "../src/pages/LandingPage/homepage/homepage";
import ProjectCalculator from "../src/pages/project-calculator/calculator";
import Aboutme from "../src/pages/aboutMe/aboutme";
import Formexp from "../src/pages/Form/Formexp";
import LayoutComponent from "../src/Component/layout/header/LayoutCommponent";
import LoginPage from "../src/pages/LoginPage/LoginPage";

const RouteManagement = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <Suspense fallback={<LoadingComponent />}>
      {!token ? (
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      ) : (
        <LayoutComponent>
          <Routes>
            <Route path="/form" element={<FormComponent />} />
            <Route path="/form-exp" element={<Formexp />} />
            <Route path="/home-page" element={<HomePage />} />
            <Route path="/Project-calculator" element={<ProjectCalculator />} />
            <Route path="/about-me" element={<Aboutme />} />
            <Route path="/about-me/:id" element={<Aboutme />} />
          </Routes>
        </LayoutComponent>
      )}
    </Suspense>
  );
};

export default RouteManagement;
