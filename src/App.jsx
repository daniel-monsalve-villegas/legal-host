import Home from "./sections/Home";
import Services from "./sections/Services";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import { Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import Post from "./components/Post";
import onda from "./assets/ondaVerde90.avif";
import ProtectedRoute from "./components/ProtectedRoute";
import EditBlog from "./sections/EditBlog";
import Login from "./components/Login.jsx";

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
        <Route path="/taunus" element={<Login />}>
          <Route
            path="/taunus/blog"
            element={
              <ProtectedRoute>
                <EditBlog />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
      <Link
        to="http://wa.me/+573116186348"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 right-4"
      >
        <img
          src="https://searx.org/image_proxy?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F5%2F5e%2FWhatsApp_icon.png&h=de897b1d97573036f9b714065296f15b86317ec4b37e1760315cd3528dc497f5"
          alt="whatsapp icon"
          className="aspect-square w-28"
        />
      </Link>
      <Footer />
    </div>
  );
}

export default App;
