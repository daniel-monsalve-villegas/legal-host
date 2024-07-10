import posts from "../data/cardData";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import "../index.css";
import { useRef, useState } from "react";

export default function CardsCarousel() {
  const scrollRef = useRef(null);
  const [bottom, setBottom] = useState(false);
  const [top, setTop] = useState(true);

  const scrollSize = 300;
  const scrollButton = (scrollOffset) => {
    const scrollPosition = (scrollRef.current.scrollLeft += scrollOffset);
    const scrollToTop =
      Math.floor(
        scrollRef.current.scrollWidth - (scrollRef.current.scrollLeft + 1),
      ) <= scrollRef.current.clientWidth;
    const buttonLeft = scrollPosition <= 290 ? true : false;
    setBottom(scrollToTop);
    setTop(buttonLeft);
  };

  return (
    <>
      <button
        className="ml-12 pr-4"
        onClick={() => scrollButton(-scrollSize)}
        disabled={top}
      >
        {top ? (
          <FaArrowLeft size={60} color={"gray"} />
        ) : (
          <FaArrowLeft size={60} color={"white"} />
        )}
      </button>
      <div
        className="grid grid-flow-col auto-cols-[32%] w-11/12 gap-4 overflow-x-scroll px-4 pb-4 card-slider card-snaps"
        ref={scrollRef}
      >
        {posts.map((post) => (
          <div
            key={post.title}
            className=" grid grid-rows-[min-content] gap-4 p-4 card-slide"
          >
            <figure>
              <img
                src={post.img}
                alt={post.title}
                className="aspect-square object-cover"
              />
              <figcaption className="text-3xl">{post.title}</figcaption>
            </figure>
            <p>{post.content.slice(0, 240)}</p>
            <button>Leer más</button>
          </div>
        ))}
      </div>
      <button
        className="mr-12 pl-12"
        onClick={() => scrollButton(scrollSize)}
        disabled={bottom}
      >
        {bottom ? (
          <FaArrowRight size={60} color={"gray"} />
        ) : (
          <FaArrowRight size={60} color={"white"} />
        )}
      </button>
    </>
  );
}
