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

export default function Step2({ positions, setPositions }) {
  return (
    <div className="flex flex-col font-cabinet">
      <p className="font-bold text-2xl mb-8">
        What types of roles would you like to see?
      </p>
      {roles.map((choice) => {
        return (
          <label
            key={choice.name}
            className={
              positions.includes(choice.name)
                ? "flex items-center px-4 py-2 bg-green-100 rounded-md mb-4"
                : "flex items-center bg-slate-100 px-4 py-2 rounded-md mb-4"
            }
          >
            {positions.includes(choice.name) ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
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
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            <input
              key={choice.id}
              type="checkbox"
              className="mr-4 appearance-none"
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
