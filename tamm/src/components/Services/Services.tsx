import AboutSVG from "./../../assets/about.svg";
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
          background,
          items,
          showContactForm,
        } = section;

        // Common styles and structures based on sectionType:
        if (sectionType === "intro") {
          return (
            <section
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100/50 p-4 rounded-2xl my-6 h-3/4"
              style={{
                backgroundImage: background ? `url(${background})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-left place-content-center">
                <h1 className="text-mainBlue text-6xl mb-6">{title}</h1>
                <p className="w-100 text-slate-500 text-left md:text-2xl lg:text-2xl xl:text-2xl rounded-2xl sm:w-3/4 border-teal-100">
                  {description}
                </p>
              </div>
              {image && (
                <div className="image">
                  <img
                    src={image}
                    alt="services-main"
                    className="rounded-2xl"
                  />
                </div>
              )}
            </section>
          );
        }

        if (sectionType === "residential") {
          return (
            <section
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100/50 p-4 rounded-2xl my-5"
            >
              {image && (
                <div className="image">
                  <img src={image} alt="residential" className="rounded-2xl" />
                </div>
              )}
              <div className="text-left place-content-center">
                <h1 className="text-mainBlue text-6xl mb-6">{title}</h1>
                <p className="w-100 text-slate-500 bg-opacity-10 text-left md:text-2xl lg:text-2xl xl:text-2xl rounded-2xl sm:w-3/4 border-teal-100">
                  {description}
                </p>
                {items && (
                  <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 text-slate-500 text-xl text-left pl-4 my-4 ml-auto mr-auto">
                    {items.map((item, i) => (
                      <li
                        key={i}
                        className="bg-gradient-to-tr from-lime-300 to-emerald-400 bg-opacity-70 p-4 rounded-lg"
                      >
                        {item}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </section>
          );
        }

        if (sectionType === "commercial") {
          return (
            <section
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100/50 p-4 rounded-2xl my-5"
            >
              <div className="text-left place-content-center">
                <h1 className="text-mainBlue text-6xl mb-6">{title}</h1>
                <p className="w-100 text-slate-500 bg-opacity-10 text-left md:text-2xl lg:text-2xl xl:text-2xl rounded-2xl sm:w-3/4 border-teal-100">
                  {description}
                </p>
                {items && (
                  <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 text-slate-500 text-xl text-left pl-4 my-4 ml-auto mr-auto">
                    {items.map((item, i) => (
                      <li
                        key={i}
                        className="bg-gradient-to-tr from-lime-300 to-emerald-400 bg-opacity-70 p-4 rounded-lg"
                      >
                        {item}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
              {image && (
                <div className="image">
                  <img src={image} alt="commercial" className="rounded-2xl" />
                </div>
              )}
            </section>
          );
        }

        if (sectionType === "why-choose") {
          return (
            <div
              key={index}
              className="text-center bg-green-100/10 rounded-2xl sm:p-20 py-8"
            >
              <div className="bg-white p-8 rounded-2xl flex flex-col sm:3/4 place-content-center mr-auto ml-auto mt-4 mb-4 shadow-2xl">
                <h2 className="text-[2rem] bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack tracking-tighter sm:text-8xl mb-4">
                  {title}
                </h2>
                {items && (
                  <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 text-slate-500 text-xl text-left pl-4 my-4 ml-auto mr-auto bg-transparent">
                    {items.map((item, i) => (
                      <li
                        key={i}
                        className="bg-gradient-to-tr from-lime-300 to-emerald-400 bg-opacity-70 p-4 rounded-lg"
                      >
                        {item}
                      </li>
                    ))}
                  </ol>
                )}
                <h2 className="text-[3rem] text-mainBlue sm:text-3xl text-center p-4 justify-center mr-auto ml-auto leading-none">
                  {description}
                </h2>
                {showContactForm && <ContactForm />}
              </div>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
