import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <header className="text-center font-cabinet font-semibold h-16 px-8 bg-slate-200 justify-start items-center flex shadow-sm">
      <Link to="/" className="flex items-center">
        <h1 className="font-extrabold text-3xl flex font-cabinet">Jobify</h1>
      </Link>
      <NavMenu />
    </header>
  );
}
