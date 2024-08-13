import { Button } from "./../button";
import Logo from "./../../../assets/FrameTAMM logo.svg";

function Header() {
  return (
    <div className="bg-white p-4 flex justify-between text-mainBlue align-middle">
      <img src={Logo} className="p-2" />
      <nav className="flex p-4 w-1/2 text-right justify-end font-extrabold text-lg">
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
        <Button className="p-4 ">Book now!</Button>
      </nav>
    </div>
  );
}

export default Header;
