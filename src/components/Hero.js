import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Hero() {
  const { user } = useContext(UserContext);
  return (
    <section className="h-screen-1/2  bg-slate-100 px-8 flex flex-col sm:flex-col md:flex-row">
      <div className="flex flex-col mt-8 justify-center">
        <div className="font-cabinet text-4xl md:text-5xl lg:text-6xl font-extrabold my-2">
          One place for the best startups jobs
        </div>
        <div className="font-cabinet text-2xl font-medium my-2">
          Find jobs that resonate with you.
        </div>
        {}

        <Link
          to={!user ? "/login" : "/quiz"}
          className="mr-auto text-center my-8 font-bold hover:opacity-80 bg-black py-2 px-4 text-white rounded-lg active:scale-110 transition-all"
        >
          Get Started
        </Link>
      </div>
      <div className="ml-auto">
        <img
          src="./assets/laptop.png"
          alt="White clay model of laptop on white pedestal"
        />
      </div>
    </section>
  );
}
