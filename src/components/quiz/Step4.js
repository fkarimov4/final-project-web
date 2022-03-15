const tech = [
  { id: 1, name: "React" },
  { id: 2, name: "React Native" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "AWS" },
  { id: 5, name: "GCP" },
  { id: 6, name: "Figma" },
  { id: 7, name: "Sidekiq" },
  { id: 8, name: "Adobe Creative Cloud" },
  { id: 9, name: "Sidekiq" },
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
      <p className="font-bold text-2xl mb-8">Which technologies are you interested in working with?</p>
      <div className="flex flex-wrap gap-2">
      {tech.map((choice) => {
        return (
          <label
            key={choice.id}
            className="py-2 px-4 bg-slate-100 rounded-md mb-2"
          >
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
