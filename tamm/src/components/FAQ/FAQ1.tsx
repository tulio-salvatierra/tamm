import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import { faqs as faqData } from "./faq";

export default function FAQ() {
  return (
    <div className="w-full  mx-auto md:px-32 sm:px-5 py-12">
      <h2 className="p-4 text-h2 bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack tracking-tighter sm:text-8xl w-100">
        Frequently Asked Questions
      </h2>
      <p className="text-left text-body mb-8 p-2">
        Find answers to common questions about our cleaning services. If you
        don't see your question here, feel free to contact us.
      </p>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
