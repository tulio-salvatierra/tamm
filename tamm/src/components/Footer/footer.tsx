import Logo from "./../../assets/TAMM_logo.svg";
import { MENU_ITEM } from "@/constants/constants";

export default function Footer() {
  return (
    <footer className="bg-muted text-foreground py-12 border-t">
      <div className="container max-w-5xl px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start gap-4">
          <a href="#" className="flex items-center gap-2">
            <img src={Logo} alt="Sparkling Clean" className="w-50 h-auto" />
          </a>
          <p className="text-muted-foreground text-left max-w-md font-second">
            a family-owned cleaning company based in Chicago, offering reliable
            and eco-friendly cleaning solutions for homes, offices, and
            commercial spaces.
          </p>
        </div>
        <div className="grid gap-2 text-center">
          <h4 className="text-2xl font-semibold font-cyan-900">Menu</h4>
          {MENU_ITEM.map((nav, index) => (
            <a href={nav.url} key={index} className={nav.class}>
              {nav.name}
            </a>
          ))}
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold">Contact</h4>
          <p className="text-muted-foreground">
            5130 S Cicero Ave., Chicago, IL USA
          </p>
          <p className="text-muted-foreground">Phone: (773) 919-9161</p>
          <p className="text-muted-foreground">
            Email: tammcleaningservices@gmail.com
          </p>
        </div>
      </div>
      <div className="container max-w-5xl px-4 md:px-6 mt-8 flex justify-between items-center text-xs text-muted-foreground">
        <p>&copy; 2024 TAMM cleaning services. </p>
        <nav className="flex gap-4">
          <a
            href="https://tuliosalvatierra.com/"
            target="_blank"
            className="hover:text-foreground"
          >
            coded by <span className="font-semibold">Tulio Salvatierra</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
