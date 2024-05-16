import Header from "./components/Header/Header.js";
import "./App.css";
import Home from "./components/Home/Home.js";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import Catalogue from "./components/Catalogue/Catalogue.js";
import Create from "./components/Create/Create.js";

function App() {
  return (
    <div id="box">
      <Header />
      {/* Main Content */}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
