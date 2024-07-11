import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SingIn from "./pages/Auth/SingIn/Index";
import "./index.scss"

function App() {
  return (
    <div className="App">
      <SingIn />

    </div>
  );
}
export default App;
