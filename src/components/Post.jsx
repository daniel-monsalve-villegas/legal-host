import { TfiArrowLeft } from "react-icons/tfi";
import { useNavigate, useParams } from "react-router-dom";
import postData from "../data/cardData";

function Post() {
  const { post } = useParams();
  const navigate = useNavigate();

  const blogPost = postData.find((posts) => posts.id === post);

  console.log(blogPost);
  return (
    <div className="w-screen">
      <div className="mt-28 ml-8 flex flex-row">
        <button
          onClick={() => navigate("/blog")}
          className="rounded-full border-4 p-2 border-black mt-8 ml-8 text-xl h-36 hover:bg-black hover:text-white"
        >
          <TfiArrowLeft size={45} />
          Atrás
        </button>
        <div className="p-4 flex flex-row justify-center m-8 mt-0">
          <img
            src={blogPost.img}
            alt={blogPost.title}
            className="p-4 max-h-fit min-w-[30rem] rounded-3xl"
          />
        </div>
        <div className="mt-12 w-2/4">
          <h1 className="text-6xl font-bold mb-4 pt-2">{blogPost.title}</h1>
          <p className="text-xl">{blogPost.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
