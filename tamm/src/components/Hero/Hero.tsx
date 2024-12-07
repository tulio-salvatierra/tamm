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
            <h1 className="text-[3rem] leading-none bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack tracking-tighter sm:text-8xl p-4">
              Keep your home sparkling clean
            </h1>
            <p className="p-4 bg-transparent text-4xl text-slate-400 max-w-[900px] md:text-lg lg:text-lg xl:text-lg ">
              TAMM cleaning services will have you experience your home like{" "}
              <a className="text-mainBlue text-[1.5rem] leading-none tracking-tighter underline">
                never before!
              </a>
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
