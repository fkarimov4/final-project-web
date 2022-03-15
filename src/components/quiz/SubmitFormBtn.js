export default function SubmitFormBtn({ handleFormSubmit }) {
  return (
    <button
      onClick={handleFormSubmit}
      className="bg-green-400 h-12 w-full rounded-md font-bold hover:opacity-80 active:scale-105 transition-all"
    >
      Submit
    </button>
  );
}
