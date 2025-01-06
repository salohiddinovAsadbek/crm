import "./assets/App.css";
import LoginReady from "./pages/login";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/products";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginReady />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;
