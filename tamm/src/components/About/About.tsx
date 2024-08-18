import Check from "./../../assets/check.svg";
import BlueClean from "./../../assets/blue-clean.jpeg";

function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-mainBlue" id="about">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-mainBlue">
              About Us
            </div>
            <h1 className="text-6xl font-bold tracking-tighter text-lightBlue sm:text-5xl">
              Cleaning Services You Can Trust
            </h1>
            <p className="max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              TAMM Cleaning Services was founded on the principles of quality,
              reliability, and customer care. Our family-owned business in
              Chicago has built a reputation for excellence in cleaning
              services, ensuring each client receives personalized attention and
              outstanding results. We use eco-friendly products to protect your
              home, office, and the environment.
            </p>
            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="space-y-2 bg-lightGreen text-white p-4 rounded-lg">
                <img src={Check} alt="about-icon" />
                <h1 className="text-2xl font-medium text-left">
                  Residential Cleaning
                </h1>
                <ul className="list-none text-left pl-4 ">
                  <li>Regular Cleaning</li>
                  <li>Deep Cleaning</li>
                  <li>Move-In/Move-Out Cleaning</li>
                </ul>
              </div>
              <div className="space-y-2 bg-lightGreen text-white p-4 rounded-lg">
                <img src={Check} alt="about-icon" />
                <h1 className="text-2xl font-medium ">Commercial Cleaning</h1>
                <ul className="list-none text-left pl-4">
                  <li>Office Cleaning</li>
                  <li>Restaurant Cleaning</li>
                  <li>Retail Cleaning</li>
                </ul>
              </div>
              <div className="space-y-2 bg-lightGreen text-white p-4 rounded-lg">
                <img src={Check} alt="about-icon" />
                <h2 className="text-2xl flex font-medium">
                  Specialized Services:
                </h2>
                <ul className="list-none text-left pl-4">
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
