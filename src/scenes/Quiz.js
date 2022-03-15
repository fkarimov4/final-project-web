import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizResultsContext } from "../context/QuizResultsContext";
import Step1 from "../components/quiz/Step1";
import Step2 from "../components/quiz/Step2";
import Step3 from "../components/quiz/Step3";
import Step4 from "../components/quiz/Step4";
import Step5 from "../components/quiz/Step5";

export default function Quiz() {
  const [step, setStep] = useState(1);

  const [locations, setLocations] = useState([]);
  const [positions, setPositions] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [salaryLowerLim, setSalaryLowerLim] = useState(50000);

  const { setQuizResults } = useContext(QuizResultsContext);

  const navigate = useNavigate();

  const userInput = {
    location: locations,
    position: positions,
    technologies: ["React"],
    experience: experiences,
    salaryLowerLim: salaryLowerLim,
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
      .then((data) => setQuizResults(data))
      .then(() => navigate("/your-results"))
      .catch((err) => console.error(err));
  };

  return (
    <section className="bg-slate-100 py-12 px-4 font-cabinet h-screen">
      <div className="bg-white sm:max-w-2xl mx-auto p-8 rounded-xl">
      {step === 1 && (
        <>
          <Step1 locations={locations} setLocations={setLocations} />
          <div className="flex gap-4 mt-8">
            <button
              onClick={nextStep}
              className="bg-green-400 h-12 w-full rounded-md "
            >
              Next
            </button>
          </div>
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
          <div className="flex gap-4 mt-8">
            <button
              onClick={prevStep}
              className="bg-white border-2 border-black w-full h-12 rounded-md "
            >
              Back
            </button>
            <button
              onClick={nextStep}
              className="bg-green-400 h-12 w-full rounded-md "
            >
              Next
            </button>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <Step3 experiences={experiences} setExperiences={setExperiences} />
          <div className="flex gap-4 mt-8">
            <button
              onClick={prevStep}
              className="bg-white border-2 border-black w-full h-12 rounded-md "
            >
              Back
            </button>
            <button
              onClick={nextStep}
              className="bg-green-400 h-12 w-full rounded-md "
            >
              Next
            </button>
          </div>
        </>
      )}
      {step === 4 && (
        <>
          <Step4
            technologies={technologies}
            setTechnologies={setTechnologies}
          />
          <div className="flex gap-4 mt-8">
            <button
              onClick={prevStep}
              className="bg-white border-2 border-black w-full h-12 rounded-md "
            >
              Back
            </button>
            <button
              onClick={nextStep}
              className="bg-green-400 h-12 w-full rounded-md "
            >
              Next
            </button>
          </div>
        </>
      )}
      {step === 5 && (
        <>
          <Step5
            salaryLowerLim={salaryLowerLim}
            setSalaryLowerLim={setSalaryLowerLim}
          />
          <div className="flex gap-4 mt-8">
            <button
              onClick={prevStep}
              className="bg-white border-2 border-black w-full h-12 rounded-md "
            >
              Back
            </button>
            <button
              onClick={handleFormSubmit}
              className="bg-green-400 h-12 w-full rounded-md "
            >
              Submit
            </button>
          </div>
        </>
      )}
      </div>
    </section>
  );
}
