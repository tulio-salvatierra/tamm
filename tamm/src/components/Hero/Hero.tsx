import yellow from "./../../assets/clean-home.png";
import HeroSvg from "./../../assets/hero.svg";

function Hero() {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${HeroSvg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -100,
      }}
    >
      <div className="container-xxl bg-inherit py-12 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 px-4 md:px-6 text-left z-10">
            <h1 className="text-h1 leading-none bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack tracking-tighter sm:text-8xl p-4">
              Move-In & Home Cleaning Services in Chicago You Can Trust
            </h1>
            <p className="p-4 bg-transparent text-h2 text-slate-400 max-w-[900px] md:text-lg lg:text-lg xl:text-lg">
              Start fresh in your new place or revitalize your current home with
              our professional cleaning solutions—designed to fit Chicago’s busy
              lifestyle and backed by a team you can{" "}
              <a className="text-mainBlue text-bold leading-none tracking-tighter underline">
                RELY
              </a>{" "}
              on.
              <br />
              <br />
              <a
                href="tel:+17739199161"
                className="p-4 bg-lightGreen text-mainBlue text-lg  justify-self-end self-center ml-auto mx-20 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-100 duration-100 rounded-2xl"
                onClick={scrollToForm}
              >
                Book now!
              </a>
            </p>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center">
            <img
              src={yellow}
              alt="cleaning"
              className="w-full max-w-[500px] md:max-w-none md:w-80% h-auto  object-cover rounded-2xl p-2 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
