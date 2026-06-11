import { Routes, Route } from "react-router"
import Home from "./pages/Home.js"
import Dashboard from "./pages/Dashboard.js";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
