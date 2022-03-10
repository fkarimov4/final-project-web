import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function NavMenu() {
  const auth = getAuth();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const logout = () => {
    signOut(auth).then(() => navigate('/'));
  };

  return (
    <nav className="nav-menu flex items-center ml-auto">
      <ul className="nav-menu flex items-center ml-auto">
        {!user ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li className="ml-8 bg-black py-2 px-4 text-white rounded-lg">
              <Link
                to="/sign-up"
                className="bg-black py-2 px-4 text-white rounded-lg"
              >
                Sign Up
              </Link>
            </li>
          </>
        ) : (
          <ul className="nav-menu flex items-center ml-auto">
            <li>My Account</li>
            <button onClick={() => logout()} className="ml-8 bg-black py-2 px-4 text-white rounded-lg">
              Sign Out
            </button>
          </ul>
        )}
      </ul>
    </nav>
  );
}
