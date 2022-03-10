import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <header className="text-center h-16 px-8 bg-slate-200 justify-start items-center flex shadow-sm">
      <Link to="/">
        <h1 className="font-bold text-3xl flex font-cabinet">Jobify</h1>
      </Link>
      <NavMenu />
    </header>
  );
}
