import posts from "../data/cardData";
import "../index.css";
import { useRef, useState } from "react";
import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";

export default function CardsCarousel() {
  const scrollRef = useRef(null);
  const [bottom, setBottom] = useState(false);
  const [top, setTop] = useState(true);

  const scrollSize = 400;
  const scrollButton = (scrollOffset) => {
    const scrollPosition = (scrollRef.current.scrollLeft += scrollOffset);
    const scrollToTop =
      Math.floor(
        scrollRef.current.scrollWidth - (scrollRef.current.scrollLeft + 1),
      ) <= scrollRef.current.clientWidth;
    const buttonLeft = scrollPosition <= 300 ? true : false;
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
          <TfiArrowLeft size={60} color={"gray"} />
        ) : (
          <TfiArrowLeft size={60} color={"white"} />
        )}
      </button>
      <div
        className="grid grid-flow-col auto-cols-[49.8%] w-9/12 gap-1 overflow-x-scroll px-4 pb-4 ml-12 card-slider card-snaps"
        ref={scrollRef}
      >
        {posts.map((post) => (
          <div
            key={post.title}
            className=" grid grid-rows-[min-content] w-10/12 gap-4 p-4 card-slide"
          >
            <figure>
              <img
                src={post.img}
                alt={post.title}
                className="aspect-square object-cover w-full"
              />
              <figcaption className="text-3xl">{post.title}</figcaption>
            </figure>
            <p>{post.content.slice(0, 240)}</p>
            <button>Leer más</button>
          </div>
        ))}
      </div>
      <button
        className="mr-6"
        onClick={() => scrollButton(scrollSize)}
        disabled={bottom}
      >
        {bottom ? (
          <TfiArrowRight size={60} color={"gray"} />
        ) : (
          <TfiArrowRight size={60} color={"white"} />
        )}
      </button>
    </>
  );
}
