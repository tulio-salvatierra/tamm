import yellow from "./../../assets/clean-home.png";
import { Button } from "./../ui/button";
import HeroSvg from "./../../assets/blob-scene-haikei.svg";

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
      }}
    >
      <div className="container-xxl bg-inherit py-12 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 px-4 md:px-6 text-left z-10">
            <h1 className="text-[2rem] bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack tracking-tighter sm:text-8xl">
              Keep your home sparkling clean
            </h1>
            <p className="bg-transparent text-4xl text-slate-400 max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed p-4 rounded-2xl">
              TAMM cleaning services will have you experience your home like{" "}
              <a className="text-mainBlue text-[2rem]">never before!</a>
              <br />
              <br />
              <Button
                className="text-mainBlue font-extrabold text-2xl p-6 rounded-lg mt-4 w-full hover:bg-lightBlue"
                onClick={scrollToForm}
              >
                Book now!
              </Button>
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
