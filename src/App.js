import "./styles.css";
import Home from "./pages/home.jsx";
import Details from "./pages/details.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
