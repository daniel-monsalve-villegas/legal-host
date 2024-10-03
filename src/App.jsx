import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Services from "./sections/Services";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
