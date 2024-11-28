import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Phone from "../../assets/phone.svg";

gsap.registerPlugin(ScrollTrigger);

export default function FloatingCallButton() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const config = { strength: 1 };

    // Set initial position and xPercent
    gsap.set(buttonRef.current, { xPercent: -50, x: -1 });

    // Tween animation
    gsap.to(buttonRef.current, {
      repeat: -1,
      yoyo: true,
      x: 1,
      duration: 0.2,
      ease: "power1.inOut",
      modifiers: {
        x: gsap.utils.unitize((value) => value * config.strength, "px"),
      },
    });

    // ScrollTrigger animation for config.strength
    gsap.to(config, {
      strength: 0.1,
      ease: "none",
      scrollTrigger: {
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="fixed bottom-20 right-1 md:right-1 z-50" ref={buttonRef}>
      <a
        href="tel:+17739199161"
        aria-label="Call us now at +1 (773) 919-9161"
        className="w-[135px] flex items-center p-4 bg-mainBlue text-lightGreen text-lg rounded-full  transition-transform transform hover:scale-105 shadow-md shadow-green-500/20  hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        <img src={Phone} alt="Phone icon" className="mr-2 w-5 h-5" />
        Call now
      </a>
    </div>
  );
}
