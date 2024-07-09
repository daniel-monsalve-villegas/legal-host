import propiedad from "../assets/ondaBlanco.avif";
import tributario from "../assets/plumaBlanco.avif";
function Services() {
  return (
    <div
      name="servicios"
      className="w-full h-screen flex justify-evenly mx-auto items-center services-bg"
    >
      <div>
        <figure className="w-1/2">
          <img src={propiedad} alt="propiedad intelectual" />
          <figcaption className="text-5xl text-white text-center">
            Propiedad Intelectual
          </figcaption>
        </figure>
      </div>
      <div>
        <figure className="w-1/2">
          <img src={tributario} alt="propiedad intelectual" />
          <figcaption className="text-5xl text-white text-center">
            Derecho Tributario
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Services;
