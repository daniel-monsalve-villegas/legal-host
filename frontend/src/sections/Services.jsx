import { Element } from "react-scroll";
import ServicesButton from "../components/servicesButton";
import "../index.css";
import { useEffect, useRef, useState } from "react";
import services from "../data/servicesData.js";
import { TfiArrowLeft, TfiClose } from "react-icons/tfi";

function Services() {
  const [activeService, setActiveService] = useState();
  const dialogRef = useRef(null);
  const secondDialog = useRef(null);
  const b = document.body;
  b.style.setProperty("--st", -document.documentElement.scrollTop + "px");
  const topPage = `${-document.documentElement.scrollTop}px`;

  const disableScroll = () => {
    b.style.position = "fixed";
    b.style.top = "var(--st, 0)";
    b.style.inlineSize = "100%";
    b.style.overflowY = "scroll";
  };

  const enableScroll = () => {
    b.style.position = "";
    b.style.top = "";
    b.style.inlineSize = "none";
    b.style.overflowY = "none";
    window.scrollTo(0, parseInt(topPage || "0") * -1);
  };

  useEffect(() => {
    if (!activeService) return;
    dialogRef.current?.showModal();
    secondDialog.current?.showModal();
    disableScroll();
    dialogRef.current?.addEventListener("close", closeModal);
    secondDialog.current?.addEventListener("close", closeSecondModal);
    return () => {
      dialogRef.current?.removeEventListener("close", closeModal);
      secondDialog.current?.removeEventListener("close", closeSecondModal);
    };
  }, [activeService]);

  const closeModal = () => {
    dialogRef.current?.close();
    enableScroll();
  };

  const closeSecondModal = () => {
    secondDialog.current?.close();
    enableScroll();
    setActiveService(undefined);
  };

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
        <button
          className="text-xl font-medium btn-more-serv"
          onClick={() => dialogRef.current?.showModal()}
        >
          Ver todos
        </button>
        <dialog ref={dialogRef} className="rounded-3xl w-2/3 p-4">
          <button
            className="rounded-full border-4 p-2 border-gray-300"
            onClick={closeModal}
          >
            <TfiClose size={25} />
          </button>
          <div className="flex flex-row flex-wrap my-10">
            {services.map((service) => (
              <button
                className="btn-services m-4"
                key={service.category}
                onClick={() => setActiveService(service)}
              >
                {service.category}
              </button>
            ))}
          </div>
        </dialog>
        <dialog ref={secondDialog} className="rounded-3xl w-1/2 bg-white p-4">
          {activeService && (
            <div>
              <button
                className="rounded-full border-4 p-2 border-gray-300"
                onClick={closeSecondModal}
              >
                <TfiArrowLeft size={25} />
              </button>
              <h2 className="text-6xl font-bold py-4">
                {activeService.category}
              </h2>
              <p className="text-2xl p-2">{activeService.desc}</p>
            </div>
          )}
        </dialog>
      </div>
    </Element>
  );
}

export default Services;
