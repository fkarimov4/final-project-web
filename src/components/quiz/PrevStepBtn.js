export default function PrevStepBtn({ prevStep }) {
  return (
    <button
      onClick={prevStep}
      className="bg-black text-white w-full h-12 rounded-md font-bold hover:opacity-80 active:scale-105 transition-all"
    >
      Back
    </button>
  );
}
