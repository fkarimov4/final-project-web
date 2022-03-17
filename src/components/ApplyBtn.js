export default function ApplyBtn({ applyToJob }) {
  return (
    <button
      className="flex bg-white hover:bg-green-400 shadow-md py-2 px-3 active:scale-110 transition-all rounded-3xl"
      onClick={applyToJob}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
      Apply
    </button>
  );
}
