import Check from "./../../assets/check.svg";
import BlueClean from "./../../assets/mary.jpg";

function About() {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-white magic magicpattern"
      id="about"
    >
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-mainBlue font-black">
              About Us
            </div>
            <h1 className="text-[2rem] bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack tracking-tighter sm:text-8xl">
              Cleaning Services You Can Trust
            </h1>
            <p className="w-100 text-slate-400 bg-opacity-10 text-left  md:text-xl lg:text-base/relaxed xl:text-xl/relaxed bg-muted rounded-2xl p-4 border-teal-100">
              TAMM Cleaning Services was founded on the principles of quality,
              reliability, and customer care. Our family-owned business in
              Chicago has built a reputation for excellence in cleaning
              services, ensuring each client receives personalized attention and
              outstanding results. We use eco-friendly products to protect your
              home, office, and the environment.
            </p>
            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="space-y-2 bg-gradient-to-tr from-lime-300 to-emerald-400 text-white p-4 rounded-lg">
                <img src={Check} alt="about-icon" />
                <h1 className="text-2xl font-medium text-left">
                  Residential Cleaning
                </h1>
                <ul className=" text-slate-400 list-none text-left pl-4">
                  <li>Regular Cleaning</li>
                  <li>Deep Cleaning</li>
                  <li>Move-In/Move-Out Cleaning</li>
                </ul>
              </div>
              <div className="space-y-2 bg-gradient-to-tr from-lime-300 to-emerald-400 text-white p-4 rounded-lg">
                <img src={Check} alt="about-icon" />
                <h1 className="text-2xl font-medium ">Commercial Cleaning</h1>
                <ul className="text-slate-400 list-none text-left pl-4">
                  <li>Office Cleaning</li>
                  <li>Restaurant Cleaning</li>
                  <li>Retail Cleaning</li>
                </ul>
              </div>
              <div className="space-y-2 bg-gradient-to-tr from-lime-300 to-emerald-400 text-white p-4 rounded-lg">
                <img src={Check} alt="about-icon" />
                <h2 className="text-2xl flex font-medium">
                  Specialized Services:
                </h2>
                <ul className="text-slate-400 list-none text-left pl-4">
                  <li>Carpet Cleaning</li>
                  <li>Window Washing</li>
                  <li>Post-Construction Cleaning</li>
                </ul>
              </div>
            </div>
          </div>
          <img
            src={BlueClean}
            width="550"
            height="310"
            alt="Cleaning Service"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
