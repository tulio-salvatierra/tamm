import AboutSVG from "./../../assets/about.svg";
import { PHONE } from "./../../constants/constants";
import { servicesData } from "./servicesData";
import { ContactForm } from "@/components/ui/contact-form";

export default function Services() {
  return (
    <div
      className="container-xxl bg-inherit py-12 md:py-24 lg:py-32 px-4 md:px-6"
      style={{
        backgroundImage: `url(${AboutSVG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {servicesData.map((section, index) => {
        const {
          sectionType,
          title,
          description,
          image,
          items,
          showContactForm,
        } = section;

        // Intro Section
        if (sectionType === "intro") {
          return (
            <section
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100/50 p-4 rounded-2xl my-32 h-3/4"
            >
              <div className="text-left place-content-center">
                <h1 className="text-mainBlue text-6xl mb-6">{title}</h1>
                <p className="text-slate-500 md:text-2xl lg:text-2xl rounded-2xl sm:w-3/4">
                  {description}
                </p>
              </div>
              {image && (
                <div>
                  <img
                    src={image}
                    alt="services-main"
                    className="rounded-2xl"
                  />
                </div>
              )}
              <a
                href={`tel:${PHONE}`}
                className="p-4 bg-lightGreen text-mainBlue text-lg text-center    transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-100 duration-100 rounded-2xl"
              >
                Book now!
              </a>
            </section>
          );
        }

        // Residential Section
        if (sectionType === "residential") {
          return (
            <section
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100/50 p-4 rounded-2xl my-32"
            >
              {image && (
                <div>
                  <img src={image} alt="residential" className="rounded-2xl" />
                </div>
              )}
              <div className="text-left place-content-center">
                <h1 className="text-mainBlue text-6xl mb-6">{title}</h1>
                <p className="text-slate-500 md:text-2xl lg:text-2xl">
                  {description}
                </p>
                {items && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-500 text-xl my-4">
                    {items.map((item, i) => (
                      <li key={i} className="bg-green-200 p-4 rounded-lg">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <a
                href={`tel:${PHONE}`}
                className="p-4 bg-lightGreen text-mainBlue text-lg text-center    transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-100 duration-100 rounded-2xl"
              >
                Book now!
              </a>
            </section>
          );
        }

        // Apartment Section
        if (sectionType === "apartment") {
          return (
            <section
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100/50 p-4 rounded-2xl my-32"
            >
              {image && (
                <div>
                  <img src={image} alt="apartment" className="rounded-2xl" />
                </div>
              )}
              <div className="text-left place-content-center">
                <h1 className="text-mainBlue text-6xl mb-6">{title}</h1>
                <p className="text-slate-500 md:text-2xl lg:text-2xl">
                  {description}
                </p>
                {items && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-500 text-xl my-4">
                    {items.map((item, i) => (
                      <li key={i} className="bg-blue-200 p-4 rounded-lg">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <a
                href={`tel:${PHONE}`}
                className="p-4 bg-lightGreen text-mainBlue text-lg text-center    transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-100 duration-100 rounded-2xl"
              >
                Book now!
              </a>
            </section>
          );
        }

        // Commercial Section
        if (sectionType === "commercial") {
          return (
            <section
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100/50 p-4 rounded-2xl my-32"
            >
              <div className="text-left place-content-center">
                <h1 className="text-mainBlue text-6xl mb-6">{title}</h1>
                <p className="text-slate-500 md:text-2xl lg:text-2xl">
                  {description}
                </p>
                {items && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-500 text-xl my-4">
                    {items.map((item, i) => (
                      <li key={i} className="bg-yellow-200 p-4 rounded-lg">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {image && (
                <div>
                  <img src={image} alt="commercial" className="rounded-2xl" />
                </div>
              )}
              <a
                href={`tel:${PHONE}`}
                className="p-4 bg-lightGreen text-mainBlue text-lg text-center    transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-100 duration-100 rounded-2xl"
              >
                Book now!
              </a>
            </section>
          );
        }

        // Why-Choose Section
        if (sectionType === "why-choose") {
          return (
            <div
              key={index}
              className="text-center my-32 bg-green-100/10 rounded-2xl p-8 sm:p-20"
            >
              <h2 className="text-mainBlue text-4xl sm:text-6xl mb-6">
                {title}
              </h2>
              <p className="text-slate-500 text-xl mb-6">{description}</p>
              {items && (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-500 text-xl">
                  {items.map((item, i) => (
                    <li key={i} className="bg-gray-200 p-4 rounded-lg">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {showContactForm && <ContactForm />}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
