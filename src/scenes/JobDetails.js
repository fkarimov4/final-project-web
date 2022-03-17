import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SaveBtn from "../components/SaveBtn";
import ApplyBtn from "../components/ApplyBtn";

export default function JobDetails() {
  const [job, setJob] = useState({});
  const [userData, setUserData] = useState([]);
  const params = useParams();

  const buttonText = userData.includes(job.id) ? "Saved" : "Save";

  useEffect(() => {
    fetch(`http://localhost:3000/users/${localStorage.user}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.savedJobs);
      })
      .catch(alert);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/jobs/${params.id}`)
      .then((res) => res.json())
      .then((data) => setJob(data))
      .catch(alert);
  }, []);

  const saveJob = () => {
    if (userData.includes(job.id)) {
      userData.splice(userData.indexOf(job.id), 1);
      setUserData([...userData]);
    } else {
      userData.push(job.id);
      setUserData([...userData]);
    }

    fetch(`http://localhost:3000/users/${localStorage.user}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ savedJobs: userData }),
    })
      .then((res) => res.json())
      .then(() => {
        fetch(`http://localhost:3000/users/${localStorage.user}`)
          .then((res) => res.json())
          .then((data) => {
            setUserData(data.savedJobs);
          })
          .catch(alert);
      })
      .catch(alert);
  };

  return (
    <section className="bg-slate-100 py-12 px-4 font-cabinet">
      {!job.logo ? (
        <div className="bg-white sm:max-w-2xl mx-auto p-10 rounded-xl">
          <h2>Loading...</h2>
          <img src="/assets/spinner.gif" alt="Spinner indicator" />
        </div>
      ) : (
        <div className="bg-white sm:max-w-2xl mx-auto p-10 rounded-xl">
          <img
            src={job.logo}
            className="h-16 w-auto mb-12"
            alt={`${job.company} logo`}
          />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="mb-2 sm:mb-0 flex items-center text-slate-700 font-medium text-lg">
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
            <p className="mb-2 sm:mb-0 flex items-center text-slate-700 font-medium text-lg">
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
              {job.location}
            </p>

            <p className="mb-2 sm:mb-0 flex items-center text-slate-700 font-medium text-lg">
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
          </div>
          <hr className="my-6" />
          <div>
            <h2 className="text-xl font-bold mb-4">Company mission</h2>
            <p>{job.mission}</p>
          </div>
          <hr className="my-6" />
          <div>
            <h2 className="text-xl font-bold mb-4">Technologies used</h2>
            <ul className="flex flex-wrap gap-2">
              {job.technologies.map((technology) => {
                return (
                  <li
                    key={technology}
                    className="inline rounded-md p-2 text-sm bg-green-100"
                  >
                    {technology}
                  </li>
                );
              })}
            </ul>
          </div>
          <hr className="my-6" />
          <div>
            <h2 className="text-xl font-bold mb-4">Benefits</h2>
            <ul>
              {job.benefits.map((benefit) => {
                return (
                  <li key={benefit} className="ml-4 list-disc mb-2">
                    {benefit}
                  </li>
                );
              })}
            </ul>
          </div>
          <hr className="my-6" />
          <div>
            <h2 className="text-xl font-bold mb-4">Requirements</h2>
            <ul>
              {job.requirements.map((requirement) => {
                return (
                  <li key={requirement} className="ml-4 list-disc mb-2">
                    {requirement}
                  </li>
                );
              })}
            </ul>
          </div>
          <hr className="my-6" />
          <div>
            <h2 className="text-xl font-bold mb-4">What the job involves</h2>
            <ul>
              {job.duties.map((duty) => {
                return (
                  <li key={duty} className="ml-4 list-disc mb-2">
                    {duty}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-4 fixed bottom-8 right-8 sm:bottom-20 sm:right-12">
            <SaveBtn
              buttonText={buttonText}
              job={job}
              userData={userData}
              saveJob={saveJob}
            />
            {/* <ApplyBtn /> */}
          </div>
        </div>
      )}
    </section>
  );
}
