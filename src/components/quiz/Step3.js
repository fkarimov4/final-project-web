const levels = [
  { id: 1, name: "Internship", shortName: "Internship" },
  { id: 2, name: "Entry level / graduate", shortName: "Entry level" },
  { id: 3, name: "Junior (1-2 years)", shortName: "Junior" },
  { id: 4, name: "Mid-level (3-4 years)", shortName: "Mid" },
  { id: 5, name: "Senior (5-8 years)", shortName: "Senior" },
  { id: 6, name: "Expert & Leadership (9+ years)", shortName: "Expert" },
];

export default function Step3({ experiences, setExperiences }) {
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
              // key={choice.id}
              type="checkbox"
              className="mr-4"
              value={choice.shortName}
              name={choice.name}
              checked={experiences.includes(choice.shortName)}
              onChange={() => {
                if (experiences.includes(choice.shortName)) {
                  experiences.splice(experiences.indexOf(choice.shortName), 1);
                  setExperiences([...experiences]);
                } else {
                  experiences.push(choice.shortName);
                  setExperiences([...experiences]);
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
