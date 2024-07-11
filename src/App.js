import React from "react";
import { Routes, Route } from "react-router-dom";

import "./index.scss"

import SingIn from "./pages/Auth/SingIn/Index";
import SelectEnvironment from "./pages/Main/SelectEnvironment/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/selectEnvironment" element={<SelectEnvironment />} />
    </Routes>
  );
}
export default App;
