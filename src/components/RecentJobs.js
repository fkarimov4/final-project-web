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
    <section className="flex flex-col py-16 font-cabinet bg-green-400">
      <h2 className="text-center text-4xl font-bold">Recent Jobs</h2>
      <div className="flex gap-8 mx-auto">
        {recentJobs.map((job) => {
          return (
            <figure className="bg-white rounded-xl my-8 p-8" key={job.id}>
              <img src={job.companyLogo} className="h-8 w-auto" alt={job.id} />
              <p>{job.position}</p>
              <p className="font-bold">
                ${job.salaryLowerLim / 1000}–{job.salaryUpperLim / 1000}k
              </p>
              <Link
                to="/"
                className="bg-black text-white w-full px-4 py-2 rounded-lg"
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
