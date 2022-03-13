import { useState, useEffect } from "react";
import Step1 from "../components/quiz/Step1";
import Step2 from "../components/quiz/Step2";
import Step3 from "../components/quiz/Step3";

export default function Quiz() {
  const [step, setStep] = useState(1);

  const [locations, setLocations] = useState([]);
  const [positions, setPositions] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [salaryLowerLim, setSalaryLowerLim] = useState(0);

  const userInput = {
    location: locations,
    position: positions,
    technologies: ["React"],
    experience: experiences,
    salaryLowerLim: 100000,
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleFormSubmit = () => {
    fetch("https://jobify-fk.uk.r.appspot.com/jobs/filtered", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    })
      .then((response) => response.json())
      .then()
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    console.log(experiences);
  }, [experiences]);

  return (
    <section className="flex flex-col bg-slate-100 w-full sm:w-2/4 p-8 mx-auto my-8 justify-center rounded-xl">
      {step === 1 && (
        <>
          <Step1 locations={locations} setLocations={setLocations} />
          <button onClick={nextStep} className="bg-green-400 h-12 rounded-md ">
            Next
          </button>
        </>
      )}
      {step === 2 && (
        <>
          <Step2
            positions={positions}
            setPositions={setPositions}
            prevStep={prevStep}
            nextStep={nextStep}
          />
          <button onClick={nextStep} className="bg-green-400 h-12 rounded-md ">
            Next
          </button>
        </>
      )}
      {step === 3 && (
        <>
          <Step3 experiences={experiences} setExperiences={setExperiences} />
          <button
            onClick={handleFormSubmit}
            className="bg-green-400 h-12 rounded-md "
          >
            Submit
          </button>
        </>
      )}
      {step === 4 && (
        <>
          <Step1
            salaryLowerLim={salaryLowerLim}
            setSalaryLowerLim={setSalaryLowerLim}
          />
          <button onClick={nextStep} className="bg-green-400 h-12 rounded-md ">
            Next
          </button>
        </>
      )}
    </section>
  );
}
