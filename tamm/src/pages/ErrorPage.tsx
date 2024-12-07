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
        className="h-full"
        style={{
          backgroundImage: `url(${HeroSVG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -100,
        }}
      >
        <div className="container p-72 flex-col">
          <h1 className="text-[3rem] leading-none bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack tracking-tighter sm:text-8xl p-4">
            Oops!
          </h1>
          <p className="p-4 bg-transparent text-4xl text-slate-400 max-w-[900px] md:text-lg lg:text-lg xl:text-lg ">
            Sorry, an unexpected error has occurred.
          </p>
          <p>
            <i className="p-4 bg-transparent text-4xl text-slate-400 max-w-[900px] md:text-lg lg:text-lg xl:text-lg ">
              {error.statusText || error.message}
            </i>
          </p>
          <a
            href="/"
            className="p-4 bg-lightGreen text-mainBlue text-lg  justify-self-end self-center ml-auto mx-20 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-100 duration-100 rounded-xl mt-5"
          >
            Back to home
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
