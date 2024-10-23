import CardsCarousel from "../components/CardsCarousel";

function Blog() {
  return (
    <div
      name="blog"
      id="blog"
      className="w-full h-screen flex justify-center items-center bg-blog-bg bg-bottom bg-no-repeat bg-cover text-white"
    >
      <CardsCarousel />
    </div>
  );
}

export default Blog;
