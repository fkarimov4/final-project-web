export default function Step5({ salaryLowerLim, setSalaryLowerLim }) {
  return (
    <div className="flex flex-col font-cabinet">
      <p className="font-bold text-2xl mb-8">
        What is your minimum salary requirement?
      </p>
      <input
        type="range"
        value={salaryLowerLim}
        step={10000}
        min={50000}
        max={300000}
        onChange={(e) => {
          setSalaryLowerLim(e.target.value);
        }}
      />
      <span>${parseInt(salaryLowerLim).toLocaleString()}</span>
    </div>
  );
}
