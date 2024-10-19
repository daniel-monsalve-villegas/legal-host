import { Link } from "react-router-dom";
import posts from "../data/cardData";
import "../index.css";
import { useRef, useState, useEffect } from "react";
import { TfiArrowLeft, TfiArrowRight, TfiClose } from "react-icons/tfi";

export default function CardsCarousel() {
  const [activePost, setActivePost] = useState();
  const scrollRef = useRef(null);
  const dialogRef = useRef(null);
  const [bottom, setBottom] = useState(false);
  const [top, setTop] = useState(true);
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
    if (!activePost) return;
    dialogRef.current?.showModal();
    disableScroll();
    dialogRef.current?.addEventListener("close", closeModal);
    return () => {
      dialogRef.current?.removeEventListener("close", closeModal);
    };
  }, [activePost]);

  const closeModal = () => {
    dialogRef.current?.close();
    enableScroll();
  };

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
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="text-center round-full border-2 border-white text-xl"
            >
              Leer más
            </Link>
            <dialog
              ref={dialogRef}
              className="rounded-3xl w-2/3 p-4 bg-black text-white border-4 border-white"
            >
              {activePost && (
                <div>
                  <button
                    className="rounded-full border-2 p-2 border-white"
                    onClick={closeModal}
                  >
                    <TfiClose size={25} />
                  </button>
                  <div className="flex flex-row">
                    <figure>
                      <figcaption className="text-6xl font-bold py-4 ">
                        {activePost.title}
                      </figcaption>
                      <img
                        src={activePost.img}
                        alt={activePost.img}
                        className="p-4 max-h-fit min-w-96 rounded-3xl"
                      />
                    </figure>
                    <p className="text-2xl p-2 mt-24 columns-2">
                      {activePost.content}
                    </p>
                  </div>
                </div>
              )}
            </dialog>
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
