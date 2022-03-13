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
      <h2 className="text-center text-4xl font-bold mb-8">Recent Jobs</h2>
      <div className="flex flex-wrap justify-center gap-6 mx-auto">
        {recentJobs.map((job) => {
          return (
            <figure className="bg-white rounded-xl w-96 p-8" key={job.id}>
              
              <img src={job.logo} className="h-12 w-auto mb-4" alt={job.id} />
              <p className="my-2 text-xl">{job.position}</p>
              <p className="font-bold mb-4">
                ${job.salaryLowerLim / 1000}–{job.salaryUpperLim / 1000}k
              </p>
              <Link
                to="/"
                className="my-8 bg-black text-white w-full px-4 py-2 rounded-lg"
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
