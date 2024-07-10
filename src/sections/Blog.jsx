import CardsCarousel from "../components/CardsCarousel";
import { Element } from "react-scroll";

function Blog() {
  return (
    <Element
      name="blog"
      id="blog"
      className="w-full h-screen flex justify-center items-center bg-black text-white"
    >
      <CardsCarousel />
    </Element>
  );
}

export default Blog;
