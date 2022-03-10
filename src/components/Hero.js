import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="h-screen-1/2 bg-slate-100 px-8 flex flex-col sm:flex-col md:flex-row">
      <div className="flex flex-col mt-8 justify-center">
        <div className="font-cabinet text-4xl md:text-5xl lg:text-6xl font-bold my-2">
          Find jobs at the best startups
        </div>
        <div className="font-cabinet text-2xl font-regular my-2     ">
          Search for jobs that resonate with you and apply now.
        </div>
        <Link
          to="/login"
          className="mr-auto text-center my-8 bg-black py-2 px-4 text-white rounded-lg"
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
