import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./index.scss"

import SingIn from "./pages/Auth/SingIn/Index";
import SelectEnvironment from "./pages/Main/SelectEnvironment/Index";
import MyNavbar from "./components/NavBar/Index";

function App() {
  const [selectedEnvironment, setSelectedEnvironment] = useState('');

  const handleSelectEnvironment = (value) => {
    setSelectedEnvironment(value);
  };

  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route
        path="/selectEnvironment"
        element={<SelectEnvironment
        onSelectEnvironment={handleSelectEnvironment} />}
      />
      <Route path="/main" element={<MyNavbar />} />
    </Routes>
  );
}
export default App;
