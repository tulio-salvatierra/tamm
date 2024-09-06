import { useState } from "react";
import { Button } from "../ui/button";
import Logo from "./../../assets/TAMM_logo.svg";
import Broom from "./../../assets/broom.svg";
import HeroSVG from "./../../assets/hero.svg";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  const scrollToFormHeader = () => {
    const formSection = document.getElementById("contact");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
    setShowMenu(false);
  };

  return (
    <header className="bg-white p-4 flex justify-between text-mainBlue shadow-xl  ">
      <a href="/">
        <img src={Logo} className="p-2" alt="TAMM Logo" />
      </a>

      <div className="flex w-auto ml-auto justify-end">
        {/* Desktop Menu */}
        <nav className="hidden md:flex p-4 text-right justify-end items-center">
          <Button
            className="p-4 bg-lightGreen text-mainBlue text-lg  justify-self-end self-center ml-auto mx-20 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-150 hover:bg-indigo-100 duration-100"
            onClick={scrollToFormHeader}
          >
            Book now!
          </Button>
          <a
            href="/"
            className="mr-3 justify-center text-mainBlue relative text-2xl block after:block after:content-[''] after:absolute after:h-[3px] after:bg-lightGreen after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Home
          </a>
          <a
            href="/services"
            className="mr-3 justify-center text-mainBlue relative text-2xl block after:block after:content-[''] after:absolute after:h-[3px] after:bg-lightGreen after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Services
          </a>
          <a
            href="#about"
            className="mr-3 justify-center text-mainBlue relative text-2xl block after:block after:content-[''] after:absolute after:h-[3px] after:bg-lightGreen after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            About
          </a>
          <a
            href="#contact"
            className="mr-3 justify-center text-mainBlue relative text-2xl block after:block after:content-[''] after:absolute after:h-[3px] after:bg-lightGreen after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          <img src={Broom} className="p-6 hover:" alt="Menu" />
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <nav
          className="md:hidden fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center p-4 justify-between"
          style={{
            backgroundImage: `url(${HeroSVG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="content-top text-center gap-6">
            <Button
              className="p-4 bg-lightGreen text-mainBlue text-lg  mb-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300 tracking-tighter"
              onClick={scrollToFormHeader}
            >
              Book now!
            </Button>
            <a
              href="/"
              className="justify-center text-mainBlue relative text-2xl block after:block after:content-[''] after:absolute after:h-[3px] after:bg-lightGreen after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Home
            </a>
            <a
              href="/services"
              className="justify-center text-mainBlue relative text-2xl block after:block after:content-[''] after:absolute after:h-[3px] after:bg-lightGreen after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Services
            </a>
            <a
              href="#about"
              className="justify-center text-mainBlue relative text-2xl block after:block after:content-[''] after:absolute after:h-[3px] after:bg-lightGreen after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              About
            </a>
            <a
              href="#contact"
              className="justify-center text-mainBlue relative text-2xl block after:block after:content-[''] after:absolute after:h-[3px] after:bg-lightGreen after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Contact
            </a>
            <button
              className="text-mainBlue text-xl  mt-4"
              onClick={toggleMenu}
            >
              Close X
            </button>
          </div>
          <footer className="content-end">
            <div className="flex flex-col items-start gap-4">
              <a href="#" className="flex items-center gap-2">
                <img src={Logo} alt="Sparkling Clean" className="w-50 h-auto" />
              </a>
              <p className="text-muted-foreground text-left max-w-md">
                a family-owned cleaning company based in Chicago, offering
                reliable and eco-friendly cleaning solutions for homes, offices,
                and commercial spaces.
              </p>
            </div>
          </footer>
        </nav>
      )}
    </header>
  );
}

export default Header;
