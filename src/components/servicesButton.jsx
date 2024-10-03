import { useEffect, useRef, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import services from "../data/servicesData";

export default function ServicesButton() {
  const [activeService, setActiveService] = useState();
  const dialogRef = useRef(null);
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
    b.style.inlineSize = "auto";
    b.style.overflowY = "auto";
    window.scrollTo(0, parseInt(topPage || "0") * -1);
  };

  useEffect(() => {
    if (!activeService) return;
    dialogRef.current?.showModal();
    disableScroll();
    dialogRef.current?.addEventListener("close", closeModal);
    return () => {
      dialogRef.current?.removeEventListener("close", closeModal);
    };
  }, [activeService]);

  const closeModal = () => {
    dialogRef.current?.close();
    setActiveService(undefined);
    enableScroll();
  };

  return (
    <div className="w-3/6 flex flex-row flex-wrap my-10">
      {services.slice(0, 11).map((service) => (
        <button
          className="btn-services m-4"
          key={service.category}
          onClick={() => setActiveService(service)}
        >
          {service.category}
        </button>
      ))}
      <dialog ref={dialogRef} className="rounded-3xl w-1/2 bg-white p-4">
        {activeService && (
          <div>
            <button
              onClick={closeModal}
              className="rounded-full border-4 p-2 border-gray-300"
            >
              <TfiClose size={25} />
            </button>
            <h2 className="text-6xl font-bold py-4">
              {activeService.category}
            </h2>
            <p className="text-2xl p-2">{activeService.desc}</p>
          </div>
        )}
      </dialog>
    </div>
  );
}
