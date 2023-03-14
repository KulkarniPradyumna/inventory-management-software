import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Assets from "./Header/Assets";
import Home from "./Header/Home";
import Employees from "./Header/Employees";
import Login from "./Header/Login";
import { settingInitialDb } from "./Utilities";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  settingInitialDb();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Header />
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/employees" element={<Employees />} />
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
