import Home from "./sections/Home";
import Services from "./sections/Services";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import Post from "./components/Post";
import onda from "./assets/ondaVerde90.avif";

function App() {
  const NotFound = () => {
    return (
      <div className="text-center mt-60 h-screen">
        <h1 className="text-6xl">Página no encontrada</h1>
        <img src={onda} alt="logo legal host" className="w-1/4 m-auto" />
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/blog/:post" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
