import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src="/assets/logo-white.svg"
          alt="Alpha Sluggers logo"
          width={337}
          height={191}
          priority
        />
        <div className="flex flex-col self-center text-4xl mb-4">
          Baseball Training
        </div>
        <div className="flex flex-col self-center">
          <div className="text-lg/6 text-center">Website Coming soon!</div>
          <div className="font-mono text-sm/6 text-center block">
            <span className="mb-1 block">
              For more information, please call:
            </span>
            <span className="mb-2 text-lg font-bold">646-671-9174</span>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[5px] flex-wrap items-center justify-center font-oswald uppercase text-2xl"></footer>
    </div>
  );
}
