import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../client/components/ui/accordion";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  href?: string;
}

export default function FAQ({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="mx-auto my-6 max-w-4xl px-6 pb-6 sm:pb-8 sm:pt-6 lg:max-w-7xl lg:px-8 lg:py-8">
      <h2 className="text-foreground mb-6 text-center text-xl font-bold leading-10 tracking-tight">
        Frequently asked questions
      </h2>

      <Accordion type="single" collapsible className="w-full space-y-3">
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={`faq-${faq.id}`}
            className="border-border hover:bg-muted/20 rounded-lg border px-4 py-2 transition-all duration-200"
          >
            <AccordionTrigger className="text-foreground hover:text-primary text-left text-sm font-semibold leading-7 transition-colors duration-200">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <div className="flex flex-col items-start justify-between gap-3">
                <p className="text-muted-foreground flex-1 text-sm leading-7">
                  {faq.answer}
                </p>
                {faq.href && (
                  <a
                    href={faq.href}
                    className="text-primary hover:text-primary/80 shrink-0 whitespace-nowrap text-sm font-medium leading-7 transition-colors duration-200"
                  >
                    Learn more →
                  </a>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
