import Check from "./../../assets/check.svg";
import BlueClean from "./../../assets/mary.jpeg";
import AboutSVG from "./../../assets/about.svg";

function About() {
  return (
    <section
      id="about"
      style={{
        backgroundImage: `url(${AboutSVG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-xxl bg-inherit py-12 md:py-24 lg:py-32">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-mainBlue font-black">
              About Us
            </div>
            <h1 className="text-[2rem] text-mainBlue font-ultrablack tracking-tighter sm:text-8xl">
              Cleaning Services You Can Trust
            </h1>
            <p className="w-100 text-slate-500 text-left md:text-xl lg:text-base/relaxed xl:text-xl/relaxed rounded-2xl p-4">
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
                <h1 className="text-2xl font-medium text-left font-ultrablack text-slate-100">
                  Residential Cleaning
                </h1>
                <ul className="text-slate-500 list-none text-left pl-4">
                  <li>Regular Cleaning</li>
                  <li>Deep Cleaning</li>
                  <li>Move-In/Move-Out Cleaning</li>
                </ul>
              </div>
              <div className="space-y-2 bg-gradient-to-tr from-lime-300 to-emerald-400 text-white p-4 rounded-lg">
                <img src={Check} alt="about-icon" />
                <h1 className="text-2xl font-medium font-ultrablack text-slate-100">
                  Commercial Cleaning
                </h1>
                <ul className="text-slate-500 list-none text-left pl-4">
                  <li>Office Cleaning</li>
                  <li>Restaurant Cleaning</li>
                  <li>Retail Cleaning</li>
                </ul>
              </div>
              <div className="space-y-2 bg-gradient-to-tr from-lime-300 to-emerald-400 text-white p-4 rounded-lg">
                <img src={Check} alt="about-icon" />
                <h1 className="text-2xl flex font-medium font-ultrablack text-slate-100">
                  Specialized Services:
                </h1>
                <ul className="text-slate-500 list-none text-left pl-4">
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
            className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
