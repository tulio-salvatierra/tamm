import { cardData } from "./cardData";

function Why() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="why">
      <div className="container px-2 md:px-2">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-12">
            <h1 className="p-4 text-h2 bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack tracking-tighter sm:text-8xl">
              Why Choose Us?
            </h1>
            <a
              className="text-lightGreen font-second font-black bg-mainBlue rounded-2xl p-4 text-[3rem]"
              href="/#pricing"
            >
              Simple!
            </a>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 sm:grid-cols-1 lg:grid-cols-3 lg:gap-12">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="grid gap-1 bg-muted p-4 rounded-xl h-[420px]"
              >
                <div className="flex flex-col items-center gap-2 justify-between">
                  <img src={card.image} className="h-[4rem]" alt={card.title} />
                  <h3 className="text-lg font-bold bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack">
                    {card.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-left p-4 font-second">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;
