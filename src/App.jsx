import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/servicios" />
        <Route path="/blog" />
        <Route path="/contacto" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
