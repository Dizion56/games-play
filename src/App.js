import Header from "./components/Header/Header.js";
import "./App.css";
import Home from "./components/Home/Home.js";

function App() {
  return (
    <div id="box">
      <Header />
      {/* Main Content */}
      <main id="main-content">
        <Home />
      </main>
    </div>
  );
}

export default App;
