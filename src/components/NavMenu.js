import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function NavMenu() {
  const { user } = useContext(UserContext);

  return (
    <nav className="nav-menu flex items-center ml-auto">
      <ul className="flex items-center ml-auto">
        {!user ? (
          <Link
            to="/login"
            className="hover:opacity-80 hover:underline hover:underline-offset-8 transition ease-in hover:ease-in duration-300"
          >
            Login
          </Link>
        ) : (
          <ul className="nav-menu flex items-center ml-auto">
            <li>
              <Link to="/my-account" className="flex align-center items-center">
                <img
                  className="h-8 w-8 rounded-full mr-2"
                  src={user.photoURL}
                  alt={`User avatar for ${user.displayName}`}
                />
                <span className="hover:opacity-80 hover:underline hover:underline-offset-8 transition ease-in hover:ease-in duration-300">
                  My Account
                </span>
              </Link>
            </li>
          </ul>
        )}
      </ul>
    </nav>
  );
}
