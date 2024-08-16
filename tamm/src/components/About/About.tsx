import Check from "./../../assets/check.svg";
import Hero from "./../../assets/tamm-hero.png";

function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-mainBlue">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-mainBlue">
              About Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-lightBlue sm:text-5xl">
              Cleaning Services You Can Trust
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Sparkling Clean, we've been providing top-notch cleaning
              services to homes and businesses in the area for over 15 years.
              Our team of experienced and dedicated professionals takes pride in
              delivering exceptional results every time.
            </p>
            <div className="grid gap-4 text-black">
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-medium">
                  <img src={Check} />
                  Residential Cleaning
                </h4>
              </div>
              <div className="flex flex-row items-center gap-2">
                <h4 className="text-lg font-medium">
                  <img src={Check} />
                  Commercial Cleaning
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-medium">
                  <img src={Check} />
                  Carpet Cleaning
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-medium">
                  <img src={Check} />
                  Window Washing
                </h4>
              </div>
            </div>
          </div>
          <img
            src={Hero}
            width="550"
            height="310"
            alt="Cleaning Service"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
