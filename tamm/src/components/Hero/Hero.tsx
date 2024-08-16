function Hero() {
  return (
    <section className="bg-mainBlue text-white h-50  bg-cover bg-no-repeat h-screen place-content-center">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
        <div className="place-content-center text-left justify-evenly md:p-9">
          <h1 className="text-[6rem] md:text-[11rem] font-bold mb-6 text-lightGreen tracking-tighter leading-none">
            Keep your home sparkling clean{" "}
          </h1>
          <p className="text-4xl w-75 pt-8 text-mainBlue bg-slate-100 p-4 rounded-2xl ">
            TAMM cleaning services will help you experience your home like never
            before!
            <br />
            <br />
            <button className="bg-mainBlue text-white text-2xl p-3 rounded-lg mt-4 w-full hover:bg-lightBlue  ">
              Book now!
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
