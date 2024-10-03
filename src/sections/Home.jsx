import Carousel from "../components/Carousel";
import { Element } from "react-scroll";

function Home() {
  return (
    <Element name="home" id="home">
      <Carousel />
    </Element>
  );
}

export default Home;
