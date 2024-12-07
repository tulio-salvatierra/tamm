import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FloatingCallButton() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const config = { strength: 1 };

    // Set initial position and xPercent
    gsap.set(buttonRef.current, { xPercent: -20, x: -1 });

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
    <div className="fixed bottom-2 right-1 md:right-2 z-50" ref={buttonRef}>
      <a
        href="https://app.squareup.com/appointments/book/1r0stwdix9bhap/LSC34DPQB3S6R/start"
        aria-label="Booking app button"
        className="w-[135px] flex items-center p-4 bg-lightGreen text-white text-lg rounded-full  transition-transform transform hover:scale-105 shadow-md shadow-green-500/20  hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/material-outlined/24/event-accepted.png"
          alt="event-accepted"
        />
        Book now
      </a>
    </div>
  );
}
