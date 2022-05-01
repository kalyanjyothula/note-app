// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import LoginPage from "../LoginPage";
import MainPage from "../MainPage";
import SignupPage from "../SignupPage";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
