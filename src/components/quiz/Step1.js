const cities = [
  { id: 1, name: "Austin" },
  { id: 2, name: "Boston" },
  { id: 3, name: "Chicago" },
  { id: 4, name: "Denver" },
  { id: 5, name: "Los Angeles" },
  { id: 6, name: "New York" },
  { id: 7, name: "San Francisco Bay Area" },
  { id: 8, name: "Remote (within the US)" },
];

export default function Step1({ locations, setLocations }) {
  return (
    <div className="flex flex-col font-cabinet">
      <p className="font-bold text-2xl mb-8">Where would you like to work?</p>
      {cities.map((choice) => {
        return (
          <label
            key={choice.id}
            className="bg-white px-4 py-2  border-2 border-black rounded-md mb-4"
          >
            <input
              // key={choice.id}
              type="checkbox"
              className="mr-4"
              value={choice.name}
              checked={locations.includes(choice.name)}
              name={choice.name}
              onChange={() => {
                if (locations.includes(choice.name)) {
                  locations.splice(locations.indexOf(choice.name), 1);
                  setLocations([...locations]);
                } else {
                  locations.push(choice.name);
                  setLocations([...locations]);
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
