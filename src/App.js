import Header from "./components/Header/Header.js";
import "./App.css";
import Home from "./components/Home/Home.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id="box">
      <Header />
      {/* Main Content */}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
