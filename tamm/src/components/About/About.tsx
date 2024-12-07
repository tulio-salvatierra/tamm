import Check from "./../../assets/check.svg";
import BlueClean from "./../../assets/mary.jpeg";
import { servicesData } from "@/components/About/servicesData";

function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-mainBlue font-black">
              About Us
            </div>
            <h1 className="text-[2rem] text-mainBlue font-ultrablack tracking-tighter sm:text-8xl">
              Cleaning Services You Can Trust
            </h1>
            <p className="w-100 text-slate-500 text-left md:text-xl lg:text-base/relaxed xl:text-xl/relaxed rounded-2xl p-4">
              TAMM Cleaning Services was founded on a commitment to quality,
              reliability, and genuine customer care. As a family-owned business
              serving Chicago, we’ve built a strong reputation for delivering
              exceptional cleaning services tailored to each client’s needs. We
              embrace eco-friendly products to ensure the safety of your home or
              office and uphold our responsibility to the environment.
            </p>
            <div className="grid grid-cols-2 gap-4 text-left">
              {servicesData.map((service, index) => (
                <div
                  className="space-y-2 bg-gradient-to-tr from-lime-300 to-emerald-400 text-white p-4 rounded-lg"
                  key={`${1 + index}`}
                >
                  <img src={Check} alt="about-icon" />
                  <h1 className="text-2xl flex font-medium font-ultrablack text-mainBlue">
                    {service.title}
                  </h1>
                  <p className="text-slate-500 text-body list-none text-left pl-4">
                    {service.description}
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

export default About;
