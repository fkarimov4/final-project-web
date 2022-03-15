export default function NextStepBtn({ nextStep }) {
  return (
    <button
      onClick={nextStep}
      className="bg-green-400 h-12 w-full rounded-md font-bold hover:opacity-80 active:scale-105 transition-all"
    >
      Next
    </button>
  );
}
