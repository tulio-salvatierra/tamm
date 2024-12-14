import Check from "./../../assets/check.svg";
import BlueClean from "@/assets/dread.webp";
import { problemData } from "@/components/Problem/problemData";

export default function Problem() {
  return (
    <section id="about" className="w-full h-5/6 py-50 my-30 md:py-24 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block text-h1 rounded-lg bg-muted pb-10 py-1leading-none bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack tracking-tighter">
              Let’s face it:
            </div>
            <h2 className="text-sm text-mainBlue font-ultrablack sm:text-4xl bg-muted p-4 rounded-xl leading-tight line">
              trying to maintain a tidy, comfortable home is harder than it
              should be.
              <br /> Instead of unwinding in a clean, welcoming space, you’re
              stuck facing clutter, dust, and an endless chore list.
            </h2>
            <div className="grid grid-cols-2 gap-4 text-left mt-10">
              {problemData.map((problem, index) => (
                <div
                  className="space-y-2 bg-muted p-2 border-x-rose-950 rounded-lg"
                  key={`${1 + index}`}
                >
                  <img src={Check} alt="about-icon" />
                  <h1 className="text-2xl flex font-medium font-ultrablack text-mainBlue">
                    {problem.title}
                  </h1>
                  <p className="text-slate-500 text-body list-none text-left mt-2">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <img
            src={BlueClean}
            width="550"
            height="310"
            alt="Cleaning Service"
            className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </div>
    </section>
  );
}
