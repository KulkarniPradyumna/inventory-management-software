import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Assets from "./Header/Assets";
import Home from "./Header/Home";
import Employees from "./Header/Employees";
import Login from "./Header/Login";
import EmployeeAssets from "./Header/EmployeeAssets";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { settingInitialDbEmp } from "./EmployeeUtils";

function App() {
  // settingInitialDbEmp();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const assetLinks = localStorage.getItem("assetLinks");
  if (!assetLinks) {
    console.log("creating empty asset links");
    localStorage.setItem("assetLinks", JSON.stringify({}));
  }
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/empAssets" element={<EmployeeAssets />} />
        <Route path="*" element={""} />
        {/* {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/empAssets" element={<EmployeeAssets />} />
            <Route path="*" element={""} />
          </>
        ) : (
          <>
            <Route
              path="/"
              element={<Login setIsAuthenticated={setIsAuthenticated} />}
            />
          </>
        )} */}
      </Routes>
    </Router>
  );
}

export default App;
