import React, { useState, useEffect } from "react";

export default function Main() {
  const [jobList, setJobList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((response) => response.json())
      .then((data) => setJobList(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="container flex gap-8 mx-auto">
        {jobList.map((job) => {
          return (
            <figure
              key={job.id}
              className="shadow-md m-4 p-12 rounded-xl text-center "
            >
              <img
                className="w-64 mx-auto"
                alt={`${job.company} logo`}
                src={job.companyLogo}
              />
              <p className="font-bold text-xl my-4">{job.position}</p>
              <hr />
              <p className="font-bold py-3">
                ${job.salaryLowerLim / 1000} - ${job.salaryUpperLim / 1000}k
              </p>
              <hr />
              <p className="uppercase text-sm tracking-wide">Technologies Used:</p>
              <div className="flex flex-wrap">
                {job.technologiesUsed.map((tech) => (
                  <div
                    key={tech}
                    className="bg-green-200 p-2 m-1 rounded-md text-xs"
                  >
                    {tech}
                  </div>
                ))}
              </div>

            </figure>
          );
        })}
      </div>
    </>
  );
}
