import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0b0c0e] border-t border-zinc-800 mt-13">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6">
              <Image
                src="/logo.png"
                alt="FitLog logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-white font-bold text-sm tracking-wide">
              FITLOG
            </span>
          </div>

          <p className="text-zinc-500 text-sm text-center sm:text-right">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
}
