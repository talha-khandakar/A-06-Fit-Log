import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#0C0D10] px-6 py-9">
      <div className="mx-auto flex max-w-6xl flex-col items-center rounded-lg border border-zinc-800 bg-[#15171D] px-8 py-10 md:flex-row md:justify-between">
        <div className="w-full md:w-1/2">
          <p className="mb-5 text-xs font-bold tracking-wider text-lime-400">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-4xl font-black leading-none text-white md:text-6xl">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-zinc-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a
            href="#library"
            className="mt-6 inline-block rounded-md bg-lime-400 px-5 py-3 text-xs font-bold text-black"
          >
            BROWSE WORKOUTS
          </a>
        </div>

        <div className="mt-8 w-full md:mt-0 md:w-1/2">
          <Image
            src="/banner.png"
            alt="Workout"
            width={320}
            height={300}
            className="mx-auto w-65 md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
