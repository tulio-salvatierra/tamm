import { useRef, FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const [, setSuccess] = useState(false);
  // Type the useRef hook to reference an HTMLFormElement
  const form = useRef<HTMLFormElement>(null);

  // Type the event as FormEvent<HTMLFormElement>
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setSuccess(true);
            alert("Thank you for submitting, we'll get back to you shortly!");
            form.current?.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
            setSuccess(false);
          }
        );
    }
  };

  return (
    <section
      className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      id="contact"
    >
      <div className="space-y-6">
        <div className="text-left">
          <h2 className="text-[2rem] bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack tracking-tighter sm:text-9xl">
            Get in Touch
          </h2>
          <p className="mt-3 text-lg text-muted-foreground font-second">
            Have a question or need a quote? Fill out the form and we'll get
            back to you as soon as possible.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-[1.5rem] text-mainBlue sm:text-xl font-second"
              >
                Name
              </label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                placeholder="John Doe"
                className="w-full border-none bg-muted px-4 py-3 text-mainBlue placeholder:text-muted-foreground focus:ring-0"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-[1.5rem] text-mainBlue sm:text-xl font-second"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                className="w-full border-none bg-muted px-4 py-3 text-mainBlue placeholder:text-muted-foreground focus:ring-0"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="text-[1.5rem] text-mainBlue sm:text-xl font-second"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(123) 456-7890"
              className="w-full border-none bg-muted px-4 py-3 text-mainBlue placeholder:text-muted-foreground focus:ring-0"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-[1.5rem] text-mainBlue sm:text-xl font-second"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="I need a cleaning right now!"
              className="w-full border-none bg-muted px-4 py-3 text-mainBlue placeholder:text-muted-foreground focus:ring-0 resize-none"
              required
            />
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="text-mainBlue tracking-tighter  text-2xl p-6 rounded-lg mt-4 w-full hover:bg-lightBlue"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
