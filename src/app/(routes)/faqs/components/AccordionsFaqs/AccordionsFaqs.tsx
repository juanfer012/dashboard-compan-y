import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dataFaqs } from "./AccordionsFaqs.data";

export function AccordionsFaqs() {
  return (
    <div>
      <Accordion type="single" collapsible>
        {dataFaqs.map(({ id, question, answer }) => (
          <AccordionItem key={id} value={question}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
