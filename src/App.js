import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Assets from "./Header/Assets";
import Home from "./Header/Home";
import Employees from "./Header/Employees";
import Login from "./Header/Login";
import EmployeeAssets from "./Header/EmployeeAssets";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { addLinks } from "./EmployeeAssetUtils";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  addLinks();
  return (
    <Router>
      <Header />
      <Routes>
        {isAuthenticated ? (
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
        )}
      </Routes>
    </Router>
  );
}

export default App;
