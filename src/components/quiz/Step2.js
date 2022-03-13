import { useState } from "react";

export default function Step1({ positions, setPositions }) {
    const [roles, setRoles] = useState([
        { id: 1, name: "Software Engineer", isChecked: false },
        { id: 2, name: "Data", isChecked: false },
        { id: 3, name: "Product", isChecked: false },
        { id: 4, name: "Design", isChecked: false },
        { id: 5, name: "Operations & Strategy", isChecked: false },
        { id: 6, name: "Sales & Account Management", isChecked: false },
        { id: 7, name: "Marketing", isChecked: false },
        { id: 8, name: "People, HR & Recruitment", isChecked: false },
      ]);

  return (
    <div className="flex flex-col font-cabinet">
      <p className="font-bold text-2xl mb-8">What types of roles would you like to see?</p>
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
              name={choice.name}
              onChange={() => {
                if (positions.includes(choice.name)) {
                  positions.splice(positions.indexOf(choice.name), 1);
                  setPositions([...positions]);
                  let newRoles = [...roles];
                  let role = newRoles[choice.id - 1];
                  role.isChecked = false;
                  newRoles[choice.id - 1] = role;
                  setRoles([...newRoles]);
                } else {
                  positions.push(choice.name);
                  setPositions([...positions]);
                  let newRoles = [...roles];
                  let role = newRoles[choice.id - 1];
                  role.isChecked = true;
                  newRoles[choice.id - 1] = role;
                  setRoles([...newRoles]);
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

