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
              We are committed to providing the highest quality cleaning
              services with unparalleled customer satisfaction.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-1">
              <div className="flex flex-col items-center gap-2">
                <img src={Bucket} alt="bucket" />
                <h3 className="text-lg font-bold bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack ">
                  Award-Winning
                </h3>
              </div>
              <p className="text-muted-foreground">
                Our team has been recognized for their exceptional cleaning
                services, winning multiple industry awards.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex flex-col items-center gap-2">
                <img src={Bottle} alt="bottle" />
                <h3 className="text-lg font-bold bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack ">
                  Satisfaction Guaranteed
                </h3>
              </div>
              <p className="text-muted-foreground">
                We stand behind our work and offer a 100% satisfaction
                guarantee. If you're not happy, we'll make it right.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex flex-col items-center gap-2">
                <img src={Hanger} alt="hanger" />
                <h3 className="text-lg font-bold bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack ">
                  Eco-Friendly Cleaning
                </h3>
              </div>
              <p className="text-muted-foreground">
                We use environmentally-friendly cleaning products to ensure a
                safe and healthy home for you and your family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;
