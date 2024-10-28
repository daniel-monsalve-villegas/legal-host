import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    login();
    navigate("/taunus/blog");
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-full border-4 border-black text-center align-bottom m-96 p-4"
    >
      Login
    </button>
  );
}

export default Login;
