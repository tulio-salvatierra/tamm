interface RouteError {
  statusText?: string;
  message?: string;
}

import { useRouteError } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSVG from "./../assets/hero.svg";

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <>
      <Helmet>
        <title>
          Page Not Found | Tamm Cleaning Services | house cleaning service
          Chicago, maid service in Chicago, residential cleaning Chicago, deep
          cleaning services Chicago, apartment cleaning Chicago
        </title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Oops! The page you're looking for isn't available. Return to Tamm Cleaning Services to explore house cleaning, maid services, and more. Keywords: house cleaning service Chicago, maid service in Chicago, residential cleaning Chicago, deep cleaning services Chicago, apartment cleaning Chicago."
        />
        <meta
          property="og:title"
          content="Page Not Found | Tamm Cleaning Services | house cleaning service Chicago, maid service in Chicago, residential cleaning Chicago, deep cleaning services Chicago, apartment cleaning Chicago"
        />
        <meta
          property="og:description"
          content="We couldn't find the page you're after. Head back to Tamm Cleaning Services and discover our full range of home cleaning solutions in Chicago. Keywords: house cleaning service Chicago, maid service in Chicago, residential cleaning Chicago, deep cleaning services Chicago, apartment cleaning Chicago."
        />
      </Helmet>
      <Header />
      <section
        id="error-page"
        className="h-dvh flex-col"
        style={{
          backgroundImage: `url(${HeroSVG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -100,
        }}
      >
        <div className="flex-col  align-middle justify-items-center ml-auto mr-auto  mt-60 w-2/3 align-center bg-muted rounded-2xl">
          <h1 className="text-[3rem] leading-none bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack tracking-tighter sm:text-8xl p-4 margin-auto">
            Oops!
          </h1>
          <p className="p-4 bg-transparent text-4xl text-cyan-900 max-w-[900px] md:text-lg lg:text-lg xl:text-lg ">
            Sorry, an unexpected error has occurred.
          </p>
          <p>
            <i className="p-4 bg-transparent text-4xl text-cyan-400 max-w-[900px] md:text-lg lg:text-lg xl:text-lg ">
              {error.statusText || error.message}
            </i>
          </p>
          <div className="flex-col justify-evenly mt-10">
            <a
              href="/"
              className="p-4 bg-lightGreen font-second text-mainBlue text-lg rounded-xl"
            >
              Back to home
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
