import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
// import MyAccountMenu from "./MyAccountMenu";

export default function NavMenu() {
  const auth = getAuth();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const logout = () => {
    signOut(auth).then(() => navigate("/"));
  };

  return (
    <nav className="nav-menu flex items-center ml-auto">
      <ul className="flex items-center ml-auto">
        {!user ? (
          <>
            <li>
              <Link to="/login" className="hover:opacity-80 hover:underline hover:underline-offset-8 transition ease-in hover:ease-in duration-300">Login</Link>
            </li>
            <li className="ml-8 bg-black font-bold py-2 px-4 hover:opacity-80 text-white rounded-lg">
              <Link to="/sign-up">Sign Up</Link>
            </li>
          </>
        ) : (
          <ul className="nav-menu flex items-center ml-auto">
            <li>
              <Link to="/my-account" className="flex align-center items-center">
                <img
                  className="h-8 w-8 rounded-full mr-2"
                  src={user.photoURL}
                  alt={`Avatar of ${user.displayName}`}
                />
                My Account
              </Link>
            </li>
            <button
              onClick={() => logout()}
              className="ml-8 bg-black py-2 px-4 hover:opacity-80 text-white rounded-lg"
            >
              Sign Out
            </button>
          </ul>
        )}
      </ul>
    </nav>
  );
}
