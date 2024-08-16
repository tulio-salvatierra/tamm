import { useState } from "react";
import { Button } from "./../button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./../drawer";
import Logo from "./../../../assets/FrameTAMM logo.svg";
import Broom from "./../../../assets/broom.svg";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header className="bg-white p-4 flex justify-between text-mainBlue ">
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <img src={Logo} className="p-2" />

      <div className="flex w-auto ml-auto justify-end">
        <nav className="hidden md:flex p-4  text-right justify-end font-extrabold text-lg items-center">
          <Button className="p-4 bg-lightGreen text-mainBlue text-lg font-extrabold justify-self-end self-center ml-auto mx-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300">
            Book now!
          </Button>
          <a href="/" className="mr-4 hover:border-lightGreen">
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
        <button className="md:hidden " onClick={toggleMenu}>
          <img src={Broom} className="p-6 md:hidden" />
        </button>
      </div>
    </header>
  );
}

export default Header;
