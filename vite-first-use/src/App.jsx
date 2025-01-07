import "./assets/App.css";
import LoginReady from "./pages/login";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/products";
import Company from "./pages/company";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginReady />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/company" element={<Company />} />
    </Routes>
  );
}

export default App;
