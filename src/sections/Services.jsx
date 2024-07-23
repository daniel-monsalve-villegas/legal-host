import { Element } from "react-scroll";
import ServicesButton from "../components/servicesButton";
import "../index.css";

function Services() {
  return (
    <Element
      name="servicios"
      id="serivicios"
      className="w-full h-screen flex flex-col justify-center items-start services-bg bg-contain bg-right pb-18 font-roboto"
    >
      <div className="ml-16">
        <div className="w-1/2">
          <h2 className="text-7xl font-bold leading-tight pb-8">
            Simplificamos <br />
            el mundo jurídico para <br /> estar más cerca de ti
          </h2>
          <p className="text-4xl font-medium tracking-wider">
            ¿Qué servicio buscas?
          </p>
        </div>
        <ServicesButton />
        {/*       <div className="w-1/2 bg-white rounded-3xl p-4"> */}
        {/*         <button onClick={handleClick}> */}
        {/*           <TfiClose size={30} /> */}
        {/*         </button> */}
        {/*         <h2 className="text-6xl font-bold">Lorem Ipsum</h2> */}
        {/*         <p className="text-2xl"> */}
        {/*           Lorem ipsum dolor, sit amet consectetur adipisicing elit. */}
        {/*           Error natus, nihil magni nostrum libero accusantium eos veniam */}
        {/*           odit quaerat, a minima. Magnam sequi distinctio, facilis */}
        {/*           inventore nemo eveniet ipsam ex. */}
        {/*         </p> */}
        {/*       </div> */}
        {/*     </dialog> */}
        {/*   )} */}
        {/* </div> */}
        <button
          className="text-xl font-medium btn-more-serv"
          onClick={() => dialogRef.current?.showModal()}
        >
          Ver todos
        </button>
      </div>
    </Element>
  );
}

export default Services;
