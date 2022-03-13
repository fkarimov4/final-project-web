import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RecentJobs() {
  const [recentJobs, setRecentJobs] = useState([]);
  useEffect(() => {
    fetch("https://jobify-fk.uk.r.appspot.com/jobs/recent")
      .then((response) => response.json())
      .then((data) => setRecentJobs(data));
  }, []);

  return (
    <section className="flex flex-col justify-center py-16 font-cabinet bg-green-400">
      <h2 className="text-center text-4xl font-extrabold mb-8">Recent Jobs</h2>
      <div className="flex flex-wrap justify-center gap-6 mx-auto">
        {recentJobs.map((job) => {
          return (
            <figure
              className="bg-white rounded-xl w-80 sm:w-96 p-8"
              key={job.id}
            >
              <img src={job.logo} className="h-12 w-auto mb-8" alt={job.id} />
              <p className="mb-2 flex items-center text-slate-700 font-medium text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-slate-300 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2} 
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {job.position}
              </p>
              <p className="mb-2 flex items-center text-slate-700 font-medium text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-slate-300 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {job.location[0]}
              </p>

              <p className="mb-8 flex items-center text-slate-700 font-medium text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-slate-300 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                ${job.salaryLowerLim / 1000}–{job.salaryUpperLim / 1000}k
              </p>
              <Link
                to={`/job-details/${job.id}`}
                className="my-8 bg-black hover:opacity-80 font-bold text-white w-full px-4 py-2 rounded-lg"
              >
                View Job
              </Link>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
