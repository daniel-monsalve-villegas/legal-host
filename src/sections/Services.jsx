import { Element } from "react-scroll";
import buttons from "../data/dataButton";
import Module from "../components/Module";
import "../index.css";
import { useState } from "react";

function Services() {
  const [showModule, setShowModule] = useState(false);

  return (
    <Element
      name="servicios"
      id="serivicios"
      className="w-full h-screen flex flex-col justify-center items-start services-bg bg-contain bg-right ml-16 pb-18 font-roboto"
    >
      <div className="w-1/2">
        <h2 className="text-7xl font-bold leading-tight pb-8">
          Simplificamos <br />
          el mundo jurídico para <br /> estar más cerca de ti
        </h2>
        <p className="text-4xl font-medium tracking-wider">
          ¿Qué servicio buscas?
        </p>
      </div>
      <div className="w-3/6 flex flex-row flex-wrap my-10">
        {buttons.map((button) => (
          <button
            className="btn-services m-4 text-center"
            key={button.desc}
            onClick={() => setShowModule(!showModule)}
          >
            {button.desc}
          </button>
        ))}
        {showModule && <Module />}
      </div>
      <button className="text-xl font-medium btn-more-serv">Ver todos</button>
    </Element>
  );
}

export default Services;
