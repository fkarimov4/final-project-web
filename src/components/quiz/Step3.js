import { useState } from "react";

export default function Step3({ experiences, setExperiences }) {
  const [levels, setLevels] = useState([
    { id: 1, name: "Internship", shortName: "Internship", isChecked: false },
    {
      id: 2,
      name: "Entry level / graduate",
      shortName: "Entry level",
      isChecked: false,
    },
    {
      id: 3,
      name: "Junior (1-2 years)",
      shortName: "Junior",
      isChecked: false,
    },
    {
      id: 4,
      name: "Mid-level (3-4 years)",
      shortName: "Mid",
      isChecked: false,
    },
    {
      id: 5,
      name: "Senior (5-8 years)",
      shortName: "Senior",
      isChecked: false,
    },
    {
      id: 6,
      name: "Expert & Leadership (9+ years)",
      shortName: "Expert",
      isChecked: false,
    },
  ]);

  return (
    <div className="flex flex-col font-cabinet">
      <p className="font-bold text-2xl mb-8">
        What types of roles would you like to see?
      </p>
      {levels.map((choice) => {
        return (
          <label
            key={choice.name}
            className="bg-white px-4 py-2  border-2 border-black rounded-md mb-4"
          >
            <input
              key={choice.id}
              type="checkbox"
              className="mr-4"
              value={choice.shortName}
              name={choice.name}
              onChange={() => {
                if (experiences.includes(choice.shortName)) {
                  experiences.splice(experiences.indexOf(choice.shortName), 1);
                  setExperiences([...experiences]);
                  let newLevels = [...levels];
                  let level = newLevels[choice.id - 1];
                  level.isChecked = false;
                  newLevels[choice.id - 1] = level;
                  setLevels([...newLevels]);
                } else {
                  experiences.push(choice.shortName);
                  setExperiences([...experiences]);
                  let newLevels = [...levels];
                  let level = newLevels[choice.id - 1];
                  level.isChecked = true;
                  newLevels[choice.id - 1] = level;
                  setLevels([...newLevels]);
                }
              }}
            />
            {choice.name}
          </label>
        );
      })}
    </div>
  );
}
