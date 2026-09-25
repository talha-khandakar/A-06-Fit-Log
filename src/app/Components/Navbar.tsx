"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b border-zinc-800 bg-[#0C0D10]">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Fitlog" width={30} height={30} />
            <span className="text-sm font-bold text-white">FITLOG</span>
          </Link>

          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="/"
              className={`rounded-full px-6 py-2 text-sm font-medium ${
                pathname === "/"
                  ? "bg-[#1A2312] text-[#C2F800]"
                  : "text-[#9CA3AF] hover:text-white"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className={`rounded-full px-6 py-2 text-sm font-medium ${
                pathname === "/my-plan"
                  ? "bg-[#1A2312] text-[#C2F800]"
                  : "text-[#9CA3AF] hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              href="/my-plan"
              className="flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white"
            >
              <span>Plan</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C2F800] text-xs text-black">
                0
              </span>
            </Link>

            <Link
              href="/my-plan"
              className="flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white"
            >
              <span>Saved</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-zinc-700 text-xs text-[#9CA3AF]">
                0
              </span>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 border-t border-zinc-800 py-3 sm:hidden">
          <Link
            href="/"
            className={`rounded-full px-5 py-2 text-sm font-medium ${
              pathname === "/"
                ? "bg-[#1A2312] text-[#C2F800]"
                : "text-[#9CA3AF]"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-5 py-2 text-sm font-medium ${
              pathname === "/my-plan"
                ? "bg-[#1A2312] text-[#C2F800]"
                : "text-[#9CA3AF]"
            }`}
          >
            My Plan
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
