import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <header className="text-center font-cabinet font-semibold h-16 px-8 bg-slate-200 justify-start items-center flex shadow-sm">
      <Link to="/" className="flex items-center">
        <svg
        className="mr-2"
          width="50"
          height="48"
          viewBox="0 0 50 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_2)">
            <rect
              width="41.774"
              height="27.8494"
              rx="4"
              transform="matrix(0.95882 0.284015 -0.00820296 0.999966 9.9462 0)"
              fill="#49DE80"
            />
            <rect
              width="41.774"
              height="27.8494"
              rx="4"
              transform="matrix(0.95882 0.284015 -0.00820296 0.999966 0.228455 7.95695)"
              fill="#87EEAB"
              fillOpacity="0.8"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_2">
              <rect width="49.7143" height="48" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h1 className="font-extrabold text-3xl flex font-cabinet">Jobify</h1>
      </Link>
      <NavMenu />
    </header>
  );
}
