import posts from "../data/cardData";
import "../index.css";

export default function CardsCarousel() {
  return (
    <div className="grid grid-flow-col auto-cols-[21%] gap-4 overflow-x-auto px-4 pb-4 card-slider card-snaps">
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
  );
}
