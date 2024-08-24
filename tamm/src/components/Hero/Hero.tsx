import yellow from "./../../assets/tamm-hero.png";
import { Button } from "./../ui/button";

function Hero() {
  return (
    <section
      className="bg-gradient-to-l from-blue-500 to-blue-600 text-white  bg-cover bg-no-repeat h-100 w-screen md:p-8 place-content-center"
      id="hero"
    >
      <div className="container-xxl bg-inherit m-4">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
          <div className="place-content-center text-left justify-evenly p- md:p-9">
            <h1 className="text-[6rem] md:text-[10rem] font-bold mb-6 bg-gradient-to-l from-gray-200 to-green-300 bg-clip-text text-transparent tracking-tighter leading-none md:leading-[8rem]">
              Keep your home sparkling clean{" "}
            </h1>
            <p className="text-4xl w-75 pt-8 text-slate-400 p-4 rounded-2xl ">
              TAMM cleaning services will have you experience your home like
              never before!
              <br />
              <br />
              <Button className=" text-mainBlue font-extrabold text-2xl p-6 rounded-lg mt-4 w-full hover:bg-lightBlue  ">
                Book now!
              </Button>
            </p>
          </div>
          <div className="place-content-center flex-wrap">
            <img
              src={yellow}
              alt="cleaning"
              className="w-auto h-25 rounded-2xl cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
