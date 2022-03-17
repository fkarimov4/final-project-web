import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SaveBtn from "../components/SaveBtn";
import { UserContext } from "../context/UserContext";

export default function MyAccount() {
  const { user } = useContext(UserContext);
  const [userJobs, setUserJobs] = useState([]);
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${localStorage.user}`)
      .then((res) => res.json())
      .then((data) => setUserJobs(data.savedJobs))
      .catch(alert);
  }, []);

  useEffect(() => {
    for (let i = 0; i < userJobs.length; i++) {
      fetch(`http://localhost:3000/jobs/${userJobs[i]}`)
        .then((res) => res.json())
        .then((data) => {
          jobList.push(data);
          setJobList([...jobList]);
        })
        .then(() => console.log(jobList));
    }
  }, [userJobs]);

  return (
    <section className="bg-slate-100 py-12 px-4 font-cabinet min-h-screen">
      <div className="sm:max-w-full mx-auto p-10 rounded-xl">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-extrabold">My Account</h1>
          <div className="flex items-center">
            <img
              className="h-16 w-16 rounded-full mr-4"
              src={user.photoURL}
              alt={`User avatar for ${user.displayName}`}
            />
          </div>
        </div>
        <hr className="my-6" />
        <p className="text-3xl font-bold mb-4">Saved Jobs</p>
        <div className="flex flex-wrap justify-start gap-4 mx-auto">
          {jobList.map((job) => {
            return (
                <figure
                  className="bg-white rounded-xl w-80 sm:w-96 p-8 border border-slate-100"
                  key={job.id}
                  
                >
                  <img src={job.logo} className="h-8 w-auto mb-8" alt={job.id} />
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
                  className="my-8 bg-black hover:opacity-80 font-bold text-white w-full px-4 py-2 rounded-lg transition-all"
                >
                  View Job
                </Link>
                </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
