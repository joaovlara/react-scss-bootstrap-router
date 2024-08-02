import React from "react";
import { Routes, Route } from "react-router-dom";

import SingIn from "./pages/Auth/SingIn/Index";
import SelectEnvironment from "./pages/Main/SelectEnvironment/Index";
import MyNavbar from "./components/NavBar/Index";
import Ajuda from "./pages/Main/Help/Index";
import MainMenu from "./pages/Main/MainMenu/Index";
import Register from "./pages/Main/Register/Index";
import SearchDevice from "./pages/Main/SearchDevice/Index";
import SearchUser from "./pages/Main/SearchUser/Index";
import Support from "./pages/Main/Support/Index";
import NotExists from "./pages/AcessDenied/NotExist/Index";
import DownloadProducts from "./pages/Main/CSV/Index"

function App() {


  return (
    <Routes>

      <Route path="/" element={<SingIn />}
      />
      <Route path="/selectEnvironment" element={<SelectEnvironment />}
      />

      <Route path="/main" element={<MyNavbar />}
      />

      <Route path="/main/help" element={<Ajuda />}
      />

      <Route path="/main/mainMenu" element={<MainMenu />}
      />

      <Route path="/main/register" element={<Register />}
      />

      <Route path="/main/searchDevice" element={<SearchDevice />}
      />

      <Route path="/main/searchUser" element={<SearchUser />}
      />

      <Route path="/main/support" element={<Support />}
      />

      <Route path="/main/dowloadCSV" element={<DownloadProducts />}
      />

      <Route path="*" element={<NotExists />}
      />

    </Routes>
  );
}
export default App;
