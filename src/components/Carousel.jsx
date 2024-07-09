import slides from "../data/carouselData";
import "../index.css";
import { useEffect, useState } from "react";

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let slider = setInterval(() => {
      if (current === slides.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 4000);
    return () => clearInterval(slider);
  }, [current]);

  const move = {
    0: "translate-x-[0%]",
    1: "translate-x-[-33.4%]",
    2: "translate-x-[-66.7%]",
  };

  return (
    <div className="overflow-x-hidden relative w-full h-full flex font-roboto">
      <div
        className={`${move[current]} flex transition ease-out duration-500 h-screen`}
      >
        {slides.map((slide) => (
          <div key={slide.category} className="relative h-screen w-screen">
            <img
              src={slide.img}
              alt={slide.category}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 h-full w-full">
              <div className="w-3/4 text-left md:w-2/4 text-white md:ml-24 ml-12 mt-72">
                <h6 className="md:text-3xl text-xl pb-4">{slide.category}</h6>
                <p className="md:text-8xl text-5xl font-bold pb-4">
                  {slide.desc}
                </p>
                <button className="btn-more md:text-3xl text-xl ml-3">
                  Leer más
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 py-6 flex justify-evenly gap-3 w-full">
        {slides.map((slide, i) => (
          <button
            onClick={() => setCurrent(i)}
            key={slide.category}
            className={`${i == current ? "bg-white" : "bg-white bg-opacity-60"} w-32 h-6 rounded-tr-full rounded-bl-full`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
