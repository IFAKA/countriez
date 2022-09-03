import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Countries, Country, Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="countries" element={<Countries />} />
      <Route path="country/:code" element={<Country />} />
    </Routes>
  );
}

export default App;
