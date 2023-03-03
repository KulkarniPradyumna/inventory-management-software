import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Assets from "./Header/Assets";
import Home from "./Header/Home";
import Employees from "./Header/Employees";
import { settingInitialDb } from "./Utilities";

function App() {
  settingInitialDb();

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </Router>
  );
}

export default App;
