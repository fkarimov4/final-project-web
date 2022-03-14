const roles = [
  { id: 1, name: "Software Engineer" },
  { id: 2, name: "Data" },
  { id: 3, name: "Product" },
  { id: 4, name: "Design" },
  { id: 5, name: "Operations & Strategy" },
  { id: 6, name: "Sales & Account Management" },
  { id: 7, name: "Marketing" },
  { id: 8, name: "People, HR & Recruitment" },
];

export default function Step1({ positions, setPositions }) {
  return (
    <div className="flex flex-col font-cabinet">
      <p className="font-bold text-2xl mb-8">
        What types of roles would you like to see?
      </p>
      {roles.map((choice) => {
        return (
          <label
            key={choice.name}
            className="bg-white px-4 py-2  border-2 border-black rounded-md mb-4"
          >
            <input
              key={choice.id}
              type="checkbox"
              className="mr-4"
              value={choice.name}
              checked={positions.includes(choice.name)}
              name={choice.name}
              onChange={() => {
                if (positions.includes(choice.name)) {
                  positions.splice(positions.indexOf(choice.name), 1);
                  setPositions([...positions]);
                } else {
                  positions.push(choice.name);
                  setPositions([...positions]);
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
