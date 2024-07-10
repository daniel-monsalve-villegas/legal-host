import propiedad from "../assets/ondaBlanco.avif";
import tributario from "../assets/plumaBlanco.avif";
import { Element } from "react-scroll";

function Services() {
  return (
    <Element
      name="servicios"
      id="serivicios"
      className="w-full h-screen flex justify-center items-start services-bg"
    >
      <div className="w-1/2 flex justify-center mt-24">
        <figure className="w-3/4">
          <img src={propiedad} alt="propiedad intelectual" />
          <figcaption className="text-5xl text-white text-center">
            Propiedad Intelectual
          </figcaption>
        </figure>
      </div>
      <div className="w-1/2 flex justify-center mt-24">
        <figure className="w-3/4">
          <img src={tributario} alt="propiedad intelectual" />
          <figcaption className="text-5xl text-white text-center">
            Derecho Tributario
          </figcaption>
        </figure>
      </div>
    </Element>
  );
}

export default Services;
