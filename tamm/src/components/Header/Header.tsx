import { useState } from "react";
import { Button } from "../ui/button";
import Logo from "./../../assets/TAMM_logo.svg";
import Broom from "./../../assets/broom.svg";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header className="bg-white p-4 flex justify-between text-mainBlue ">
      <img src={Logo} className="p-2" alt="TAMM Logo" />

      <div className="flex w-auto ml-auto justify-end">
        {/* Desktop Menu */}
        <nav className="hidden md:flex p-4 text-right justify-end font-extrabold text-lg items-center">
          <Button className="p-4 bg-lightGreen text-mainBlue text-lg font-extrabold justify-self-end self-center ml-auto mx-20 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-100">
            Book now!
          </Button>
          <a href="/" className="mr-4 ">
            Home
          </a>
          <a href="/" className="mr-4">
            Services
          </a>
          <a href="/" className="mr-4">
            About
          </a>
          <a href="/" className="mr-4">
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
        <nav className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center p-4">
          <Button className="p-4 bg-lightGreen text-mainBlue text-lg font-extrabold mb-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300">
            Book now!
          </Button>
          <a href="/" className="block mb-4 text-xl">
            Home
          </a>
          <a href="/" className="block mb-4 text-xl">
            Services
          </a>
          <a href="/" className="block mb-4 text-xl">
            About
          </a>
          <a href="/" className="block mb-4 text-xl">
            Contact
          </a>
          <button
            className="text-mainBlue text-xl font-extrabold mt-4"
            onClick={toggleMenu}
          >
            Close X
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
