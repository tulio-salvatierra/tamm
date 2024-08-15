import { Button } from "./../button";
import Logo from "./../../../assets/FrameTAMM logo.svg";
import Broom from "./../../../assets/broom.svg";

function Header() {
  return (
    <div className="bg-white p-4 flex text-mainBlue align-middle">
      <img src={Logo} className="p-2" />
      <nav className="hidden md:flex p-4 w-1/2 text-right justify-end font-extrabold text-lg items-center">
        <a href="/" className="mr-4">
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
      <div className="flex w-1/4 justify-end">
        <Button className="p-4 bg-lightGreen text-black justify-self-end self-center ml-auto mx-20 md:hidden">
          Book now!
        </Button>
        <img src={Broom} className="md:hidden" />
      </div>
    </div>
  );
}

export default Header;
