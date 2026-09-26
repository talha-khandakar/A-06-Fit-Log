export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0b0c0e] px-6">
      <div className="text-center">
        <h1 className="text-6xl font-black text-lime-400">404</h1>

        <h2 className="mt-4 text-2xl font-bold text-white">Page Not Found</h2>

        <p className="mt-2 text-zinc-400">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}
