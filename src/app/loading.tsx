export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0b0b0f]">
      <div className="flex flex-col items-center">
        <span className="loading loading-spinner loading-lg text-white"></span>

        <h2 className="mt-5 text-lg font-semibold text-white">
          Loading Data...
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Getting everything ready for you
        </p>
      </div>
    </div>
  );
}
