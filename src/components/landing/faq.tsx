import { FC } from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is Next Start?',
    answer:
      'Next Start is a powerful landing page builder for developers, offering code templates and components inspired by shadcn. Create beautiful, functional landing pages quickly and efficiently.',
  },
  {
    question: 'Is Next Start open source?',
    answer:
      "Yes, Next Start is an open-source project. This means you can use, modify, and contribute to the codebase. We believe in transparency and community-driven development, which helps us continually improve and adapt to developers' needs.",
  },
  {
    question: 'How does Next Start compare to other landing page builders?',
    answer:
      "Next Start stands out by focusing on developers' needs. Unlike traditional drag-and-drop builders, we provide clean, exportable code that integrates seamlessly with your existing projects. Our components are based on popular libraries like shadcn, ensuring high-quality, customizable UI elements.",
  },
];

export const FAQ: FC = () => {
  return (
    <section className="bg-gradient-to-t from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="rounded-lg border shadow-sm">
                <AccordionTrigger className="px-4 py-4">
                  <span className="text-left font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2 text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
