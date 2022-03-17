import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        fetch("https://jobify-fk.uk.r.appspot.com/users/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: result.user.uid }),
        });
        localStorage.setItem("user", result.user.uid);
        navigate("/quiz");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <section className="bg-slate-100 py-12 px-4 font-cabinet min-h-screen">
      <div className="bg-white sm:max-w-2xl mx-auto p-10 rounded-xl">
        <h1 className="font-bold text-center text-3xl mb-8">Login</h1>
        <form>
          <label className="flex flex-col font-bold">
            Email
            <input
              className="p-2 mb-2 border-2 border-black rounded-lg"
              type="email"
            />
          </label>
          <label className="flex flex-col font-bold">
            Password
            <input
              className="p-2 mb-2 border-2 border-black rounded-lg"
              type="password"
            />
          </label>
          <button className="text-xl h-12 bg-black font-bold text-white rounded-lg p-2 w-full mt-4">
            Sign In
          </button>
          <span className="block text-center my-4">or</span>
        </form>
        <button
          onClick={() => loginWithGoogle()}
          className="flex h-12 items-center justify-center border-2 font-bold border-black text-xl rounded-lg p-2 w-full mt-4"
        >
          <svg
            className="mr-4"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
              <path
                fill="#4285F4"
                d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
              />
              <path
                fill="#34A853"
                d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
              />
              <path
                fill="#FBBC05"
                d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
              />
              <path
                fill="#EA4335"
                d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
              />
            </g>
          </svg>
          Sign In with Google
        </button>
      </div>
    </section>
  );
}
