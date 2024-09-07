import Main from "./../../assets/services/services.png";
import Residential from "./../../assets/services/residential.png";
import Commercial from "./../../assets/services/commercial.png";
import AboutSVG from "./../../assets/about.svg";
import { ContactForm } from "@/components/ui/contact-form";
function Services() {
  return (
    <div
      className="container-xxl bg-inherit py-12 md:py-24 lg:py-32 px-4 md:px-6"
      style={{
        backgroundImage: `url(${AboutSVG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100/50 p-4 rounded-2xl my-6 h-3/4">
        <div className="text-left place-content-center">
          <h1 className="text-mainBlue text-6xl mb-6">Our Services</h1>
          <p className="w-100 text-slate-500 text-left  md:text-2xl lg:text-2xl xl:text-2xl rounded-2xl sm:w-3/4 border-teal-100">
            At TAMM Cleaning Services, we offer a comprehensive range of
            cleaning solutions tailored to meet the unique needs of both
            residential and commercial clients in Chicago and surrounding areas.
            Our dedicated team of professionals is committed to delivering
            high-quality, reliable, and eco-friendly cleaning services that
            ensure your space is spotless and inviting.
          </p>
        </div>
        <div className="image">
          <img src={Main} alt="services-main" className="rounded-2xl" />
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100/50 p-4 rounded-2xl my-5">
          <div className="image">
            <img src={Residential} alt="residential" className="rounded-2xl" />
          </div>
          <div className="text-left place-content-center">
            <h1 className="text-mainBlue text-6xl mb-6">
              Residential Cleaning Services
            </h1>
            <p className="w-100 text-slate-500 bg-opacity-10 text-left  md:text-2xl lg:text-2xl xl:text-2xl rounded-2xl sm:w-3/4 border-teal-100">
              Keep your home pristine and comfortable with our top-notch
              residential cleaning services. Whether you need a one-time deep
              clean or regular maintenance, we’ve got you covered. Our team will
              thoroughly clean every room, including kitchens, bathrooms,
              bedrooms, and living areas, paying special attention to
              high-traffic zones and hard-to-reach spots. We use eco-friendly
              products to protect your family and pets while leaving your home
              sparkling clean.
            </p>
            <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 text-slate-500 text-xl text-left pl-4 my-4 ml-auto mr-auto">
              <li className="bg-gradient-to-tr from-lime-300 to-emerald-400 bg-opacity-70 p-4 rounded-lg">
                Deep Cleaning
              </li>
              <li className="bg-gradient-to-tr from-lime-300 to-emerald-400 bg-opacity-70 p-4 rounded-lg">
                Regular Maintenance Cleaning
              </li>
              <li className="bg-gradient-to-tr from-lime-300 to-emerald-400 bg-opacity-70 p-4 rounded-lg">
                Move-In/Move-Out Cleaning
              </li>
              <li className="bg-gradient-to-tr from-lime-300 to-emerald-400 bg-opacity-70 p-4 rounded-lg">
                Post-Construction Cleaning
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100/50 p-4 rounded-2xl my-5">
        <div className="text-left place-content-center">
          <h1 className="text-mainBlue text-6xl mb-6">
            Commercial Cleaning Services
          </h1>
          <p className="w-100 text-slate-500 bg-opacity-10 text-left  md:text-2xl lg:text-2xl xl:text-2xl rounded-2xl sm:w-3/4 border-teal-100">
            A clean workspace is essential for productivity and professionalism.
            TAMM Cleaning Services offers customized commercial cleaning
            solutions for offices, retail stores, and other business premises.
            We provide flexible scheduling to minimize disruption to your
            operations, ensuring your workplace remains clean, sanitary, and
            welcoming for both employees and clients.
          </p>
          <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 text-slate-500 text-xl text-left pl-4 my-4 ml-auto mr-auto">
            <li className="bg-gradient-to-tr from-lime-300 to-emerald-400 bg-opacity-70 p-4 rounded-lg">
              Office Cleaning
            </li>
            <li className="bg-gradient-to-tr from-lime-300 to-emerald-400 bg-opacity-70 p-4 rounded-lg">
              Retail Store Cleaning
            </li>
            <li className="bg-gradient-to-tr from-lime-300 to-emerald-400 bg-opacity-70 p-4 rounded-lg">
              Restroom Sanitation
            </li>
            <li className="bg-gradient-to-tr from-lime-300 to-emerald-400 bg-opacity-70 p-4 rounded-lg">
              Carpet and Upholstery Cleaning
            </li>
          </ol>
        </div>
        <div className="image">
          <img src={Commercial} alt="residential" className="rounded-2xl" />
        </div>
      </section>

      <div className="text-center bg-green-100/10 rounded-2xl  sm:p-20 py-8">
        <div className="bg-white p-8 rounded-2xl flex flex-col sm:3/4 place-content-center mr-auto ml-auto mt-4 mb-4 shadow-2xl">
          <h2 className="text-[2rem] bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack tracking-tighter sm:text-8xl mb-4">
            Why Choose TAMM Cleaning Services?
          </h2>
          <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 text-slate-500 text-xl text-left pl-4 my-4 ml-auto mr-auto bg-transparent">
            <li className="bg-gradient-to-tr from-lime-300 to-emerald-400 bg-opacity-70 p-4 rounded-lg">
              1. Experienced and Trusted Team: Our trained professionals are
              committed to providing the highest quality of service.
            </li>
            <li className="bg-gradient-to-tr from-lime-300 to-emerald-400 bg-opacity-70 p-4 rounded-lg">
              2. Eco-Friendly Products: We use environmentally safe products to
              protect your space and the planet.
            </li>
            <li className="bg-gradient-to-tr from-lime-300 to-emerald-400 bg-opacity-70 p-4 rounded-lg">
              3. Flexible Scheduling: We work around your schedule to provide
              convenient and efficient cleaning services.
            </li>
            <li className="bg-gradient-to-tr from-lime-300 to-emerald-400 bg-opacity-70 p-6 rounded-lg">
              4. Satisfaction Guaranteed: Your satisfaction is our top priority.
              We’re not happy until you are!
            </li>
          </ol>

          <h2 className="text-[3rem] text-mainBlue sm:text-3xl text-center p-4 justify-center mr-auto ml-auto leading-none">
            📝 Send us your details so we can provide a quote and tell about our
            welcome discount or simply just ⤵️
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Services;
