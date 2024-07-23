import { useEffect, useRef, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import services from "../data/servicesData";
import { document } from "postcss";

export default function ServicesButton() {
  const [activeService, setActiveService] = useState();
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!activeService) return;
    dialogRef.current?.showModal();
    document.body.classList.add = "overflow-hidden";
    dialogRef.current?.addEventListener("close", closeModal);
    return () => {
      dialogRef.current?.removeEventListener("close", closeModal);
    };
  }, [activeService]);

  const closeModal = () => {
    dialogRef.current?.close();
    setActiveService(undefined);
    document.body.style.overflow = "";
  };

  return (
    <div className="w-3/6 flex flex-row flex-wrap my-10">
      {services.slice(0, 10).map((service) => (
        <button
          className="btn-services m-4 text-center"
          key={service.category}
          onClick={() => setActiveService(service)}
        >
          {service.category}
        </button>
      ))}
      <dialog ref={dialogRef}>
        {activeService && (
          <div className="w-1/2 bg-white rounded-3xl p-4">
            <button onClick={closeModal}>
              <TfiClose size={30} />
            </button>
            <h2 className="text-6xl font-bold">{activeService.category}</h2>
            <p className="text-2xl">{activeService.desc}</p>
          </div>
        )}
      </dialog>
    </div>
  );
}
