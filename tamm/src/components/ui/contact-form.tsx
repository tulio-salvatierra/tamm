import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <section
      className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      id="contact"
    >
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-[2rem] bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack tracking-tighter sm:text-8xl">
            Get in Touch
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Have a question or need a quote? Fill out the form and we'll get
            back to you as soon as possible.
          </p>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-[2rem] text-mainBlue sm:text-4xl"
              >
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full border-none bg-muted px-4 py-3 text-primary-foreground placeholder:text-muted-foreground focus:ring-0"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-[2rem] text-mainBlue sm:text-4xl"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="w-full border-none bg-muted px-4 py-3 text-primary-foreground placeholder:text-muted-foreground focus:ring-0"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="phone"
              className="text-[2rem] text-mainBlue sm:text-4xl"
            >
              Phone
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(123) 456-7890"
              className="w-full border-none bg-muted px-4 py-3 text-primary-foreground placeholder:text-muted-foreground focus:ring-0"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="text-[2rem] text-mainBlue sm:text-4xl"
            >
              Message
            </Label>
            <Textarea
              id="message"
              rows={5}
              placeholder="How can we help you?"
              className="w-full border-none bg-muted px-4 py-3 text-primary-foreground placeholder:text-muted-foreground focus:ring-0 resize-none"
            />
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
