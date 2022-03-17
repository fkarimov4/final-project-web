export default function SaveBtn({ job, saveJob, userData, buttonText }) {
  return (
    <button
      className={userData.includes(job.id) ? "flex bg-red-500 text-white hover:opacity-90 active:scale-110 transition-all shadow-md py-2 px-3 rounded-3xl" : "flex bg-white hover:bg-red-500 hover:text-white active:scale-110 transition-all shadow-md py-2 px-3 rounded-3xl"}
      onClick={saveJob}
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
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      {buttonText}
    </button>
  );
}
