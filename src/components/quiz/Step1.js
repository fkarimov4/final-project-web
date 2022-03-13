import { useState } from "react";

export default function Step1({ locations, setLocations }) {
  const [cities, setCities] = useState([
    { id: 1, name: "Austin", isChecked: false },
    { id: 2, name: "Boston", isChecked: false },
    { id: 3, name: "Chicago", isChecked: false },
    { id: 4, name: "Denver", isChecked: false },
    { id: 5, name: "Los Angeles", isChecked: false },
    { id: 6, name: "New York", isChecked: false },
    { id: 7, name: "San Francisco Bay Area", isChecked: false },
    { id: 8, name: "Remote (within the US)", isChecked: false },
  ]);

  return (
    <div className="flex flex-col font-cabinet">
      <p className="font-bold text-2xl mb-8">Where would you like to work?</p>
      {cities.map((choice) => {
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
              name={choice.name}
              onChange={() => {
                if (locations.includes(choice.name)) {
                  locations.splice(locations.indexOf(choice.name), 1);
                  setLocations([...locations]);
                  let newCities = [...cities];
                  let city = newCities[choice.id - 1];
                  city.isChecked = false;
                  newCities[choice.id - 1] = city;
                  setCities([...newCities]);
                } else {
                  locations.push(choice.name);
                  setLocations([...locations]);
                  let newCities = [...cities];
                  let city = newCities[choice.id - 1];
                  city.isChecked = true;
                  newCities[choice.id - 1] = city;
                  setCities([...newCities]);
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
