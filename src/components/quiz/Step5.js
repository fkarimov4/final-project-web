export default function Step5({ salaryLowerLim, setSalaryLowerLim }) {
  return (
    <div className="flex flex-col font-cabinet">
      <p className="font-bold text-2xl mb-8">
        What is your minimum salary requirement?
      </p>
        <input
            className="slider w-full h-2 rounded-xl bg-green-200 text-green-400 appearance-none"
          type="range"
          value={salaryLowerLim}
          step={10000}
          min={50000}
          max={300000}
          onChange={(e) => {
            setSalaryLowerLim(e.target.value);
          }}
        />
        <span className="block text-center text-2xl my-4">${parseInt(salaryLowerLim).toLocaleString()}</span>
    </div>
  );
}
