import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FaqSection() {
  const faqs = [
    {
      question: 'Is cashless treatment available?',
      answer: 'Yes, at 12,000+ network hospitals across India.',
    },
    {
      question: 'Is pre-existing disease covered?',
      answer: 'Yes, after waiting period as per policy terms.',
    },
    {
      question: 'Can I increase coverage later?',
      answer: 'Yes, you can upgrade or purchase top-up plans.',
    },
    {
      question: 'Are tax benefits available?',
      answer: 'Yes, under Section 80D of Income Tax Act.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-gray-100 rounded-xl px-6 hover:border-brand-secondary transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-brand-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
