export default function LoadingScreen() {
  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-screen flex items-center justify-center bg-black/70 backdrop-blur">
      <div className="p-6 rounded-xl shadow-xl flex flex-col items-center space-y-4">
        <svg
          className="w-10 h-10 animate-spin text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          ></path>
        </svg>
        <p className="text-white text-lg font-semibold">loading...</p>
      </div>
    </div>
  );
}
