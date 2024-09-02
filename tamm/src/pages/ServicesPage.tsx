import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "./../assets/services/services.png";
import Residential from "./../assets/services/residential.png";
import Commercial from "./../assets/services/commercial.png";
import { ContactForm } from "@/components/ui/contact-form";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <div className=" p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-2xl my-6 h-3/4">
          <div className="text-left place-content-center">
            <h1 className="text-[2rem] text-mainBlue sm:text-3xl">
              Our Services
            </h1>
            <p className="w-100 text-slate-400 bg-opacity-10 text-left  md:text-xl lg:text-xl xl:text-xl bg-muted rounded-2xl sm:w-3/4 border-teal-100">
              At TAMM Cleaning Services, we offer a comprehensive range of
              cleaning solutions tailored to meet the unique needs of both
              residential and commercial clients in Chicago and surrounding
              areas. Our dedicated team of professionals is committed to
              delivering high-quality, reliable, and eco-friendly cleaning
              services that ensure your space is spotless and inviting.
            </p>
          </div>
          <div className="image">
            <img src={Main} alt="services-main" className="rounded-2xl" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-2xl my-5">
          <div className="image">
            <img src={Residential} alt="residential" className="rounded-2xl" />
          </div>
          <div className="text-left place-content-center">
            <h1 className="text-[2rem] text-mainBlue sm:text-3xl">
              Residential Cleaning Services
            </h1>
            <p className="w-100 text-slate-400 bg-opacity-10 text-left  md:text-xl lg:text-base/relaxed xl:text-xl/relaxed bg-muted rounded-2xl p-4 border-teal-100 sm:w-3/4">
              Keep your home pristine and comfortable with our top-notch
              residential cleaning services. Whether you need a one-time deep
              clean or regular maintenance, we’ve got you covered. Our team will
              thoroughly clean every room, including kitchens, bathrooms,
              bedrooms, and living areas, paying special attention to
              high-traffic zones and hard-to-reach spots. We use eco-friendly
              products to protect your family and pets while leaving your home
              sparkling clean.
            </p>
            <ul className="text-slate-400 list-disc text-left pl-4">
              <li>Deep Cleaning</li>
              <li>Regular Maintenance Cleaning</li>
              <li>Move-In/Move-Out Cleaning</li>
              <li>Post-Construction Cleaning</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-2xl my-5">
          <div className="text-left place-content-center">
            <h1 className="text-[2rem] text-mainBlue sm:text-3xl">
              Commercial Cleaning Services
            </h1>
            <p className="w-100 text-slate-400 bg-opacity-10 text-left  md:text-xl lg:text-base/relaxed xl:text-xl/relaxed bg-muted rounded-2xl p-4 border-teal-100 sm:w-3/4">
              A clean workspace is essential for productivity and
              professionalism. TAMM Cleaning Services offers customized
              commercial cleaning solutions for offices, retail stores, and
              other business premises. We provide flexible scheduling to
              minimize disruption to your operations, ensuring your workplace
              remains clean, sanitary, and welcoming for both employees and
              clients.
            </p>
            <ul className="text-slate-400 text-left pl-4 list-disc">
              <li>Office Cleaning</li>
              <li>Retail Store Cleaning</li>
              <li>Restroom Sanitation</li>
              <li>Carpet and Upholstery Cleaning</li>
            </ul>
          </div>
          <div className="image">
            <img src={Commercial} alt="residential" className="rounded-2xl" />
          </div>
        </div>
        <div className="text-center bg-green-100 shadow-2xl rounded-2xl sm:p-20">
          <div className="bg-white p-8 rounded-2xl flex flex-col w-3/4 place-content-center mr-auto ml-auto">
            <h1 className="text-[2rem] bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack tracking-tighter sm:text-8xl">
              Why Choose TAMM Cleaning Services?
            </h1>
            <ul className="text-slate-400 text-left justify-center pl-4 my-4 ml-auto mr-auto list-disc">
              <li>
                Experienced and Trusted Team: Our trained professionals are
                committed to providing the highest quality of service.
              </li>
              <li>
                Eco-Friendly Products: We use environmentally safe products to
                protect your space and the planet.
              </li>
              <li>
                Flexible Scheduling: We work around your schedule to provide
                convenient and efficient cleaning services.
              </li>
              <li>
                Satisfaction Guaranteed: Your satisfaction is our top priority.
                We’re not happy until you are!
              </li>
            </ul>
            <h2 className="text-[2rem] text-mainBlue sm:text-3xl text-center p-4 justify-center mr-auto ml-auto">
              Let TAMM Cleaning Services create a clean, healthy environment for
              your home or business. Contact us today to schedule a cleaning
              service that suits your needs!
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
