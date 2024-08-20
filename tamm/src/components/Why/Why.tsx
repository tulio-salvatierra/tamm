import Bucket from "./../../assets/bucket.svg";
import Bottle from "./../../assets/bottle.svg";
import Hanger from "./../../assets/hanger.svg";

function Why() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-[2rem] bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack tracking-tighter sm:text-8xl">
              Why Choose Us?
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              <a className="text-bolder text-[2rem]">Simple!</a> We are
              committed to providing the highest quality cleaning services with
              unparalleled customer satisfaction.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-1 bg-muted p-4 rounded-xl">
              <div className="flex flex-col items-center gap-2">
                <img src={Bucket} className="h-[3rem]" alt="bucket" />
                <h3 className="text-lg font-bold bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack ">
                  Experienced and Reliable Cleaning Professionals
                </h3>
              </div>
              <p className="text-muted-foreground text-left p-4">
                Our team at TAMM Cleaning Services is highly trained and
                experienced in residential and commercial cleaning. We deliver
                reliable, detail-oriented service every time, ensuring your
                space is always spotless. Choose us for a trusted and
                professional cleaning experience in Chicago.
              </p>
            </div>
            <div className="grid gap-1 bg-muted p-4 rounded-xl md:mt-[-4rem]">
              <div className="flex flex-col items-center gap-2">
                <img src={Bottle} className="h-[4rem]" alt="bottle" />
                <h3 className="text-lg font-bold bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack ">
                  Eco-Friendly Cleaning Products and Practices
                </h3>
              </div>
              <p className="text-muted-foreground text-left p-4">
                We use eco-friendly cleaning products that are safe for your
                family, pets, and the environment. Our green practices ensure a
                clean space while supporting a healthier planet. Enjoy effective
                cleaning that’s good for both you and the Earth.
              </p>
            </div>
            <div className="grid gap-1 bg-muted p-4 rounded-xl h-[388px]">
              <div className="flex flex-col items-center gap-2">
                <img src={Hanger} className="h-[4rem]" alt="hanger" />
                <h3 className="text-lg font-bold bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack ">
                  Customized Cleaning Plans to Meet Your Specific Needs
                </h3>
              </div>
              <p className="text-muted-foreground">
                TAMM Cleaning Services offers customized cleaning plans tailored
                to your specific needs. Whether it’s regular home cleaning or a
                one-time deep clean, we’ll create a schedule that works for you.
                Flexibility and quality are our priorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;
