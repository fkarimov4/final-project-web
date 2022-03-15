const tech = [
  { id: 1, name: "React" },
  { id: 2, name: "React Native" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "AWS" },
  { id: 5, name: "GCP" },
  { id: 6, name: "Figma" },
  { id: 7, name: "Sidekiq" },
  { id: 8, name: "Adobe Creative Cloud" },
  { id: 9, name: "Angular" },
  { id: 10, name: "Postgres" },
  { id: 11, name: "Heroku" },
  { id: 12, name: "Ruby" },
  { id: 13, name: "Rspec" },
  { id: 14, name: "Rails" },
  { id: 15, name: "Ruby on Rails" },
];

export default function Step4({ technologies, setTechnologies }) {
  return (
    <div className="flex flex-col font-cabinet">
      <p className="font-bold text-2xl mb-8">
        Which technologies are you interested in working with?
      </p>
      <div className="flex flex-wrap gap-2">
        {tech.map((choice) => {
          return (
            <label
              key={choice.id}
              className={
                technologies.includes(choice.name)
                  ? "flex items-center p-2 bg-green-100 rounded-md mb-2"
                  : "p-2 bg-slate-100 rounded-md mb-2"
              }
            >
              {technologies.includes(choice.name) ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                ""
              )}
              <input
                // key={choice.id}
                type="checkbox"
                className="mr-4 hidden appearance-none"
                value={choice.name}
                checked={technologies.includes(choice.name)}
                name={choice.name}
                onChange={() => {
                  if (technologies.includes(choice.name)) {
                    technologies.splice(technologies.indexOf(choice.name), 1);
                    setTechnologies([...technologies]);
                  } else {
                    technologies.push(choice.name);
                    setTechnologies([...technologies]);
                  }
                }}
              />
              {choice.name}
            </label>
          );
        })}
      </div>
    </div>
  );
}
