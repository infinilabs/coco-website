import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ALL_FAQ } from "@/data/faq";

export default function FAQFeature({
  locale,
  langName,
}: {
  locale: any;
  langName: string;
}) {
  const FAQ = ALL_FAQ[`FAQ_${langName.toUpperCase()}`];

  return (
    <section className="w-full flex flex-col items-center pt-48 px-4 sm:px-6 lg:px-8">
      <div className="mb-4 text-center font-medium text-3xl md:text-5xl bg-gradient-to-r from-[#843DFF] to-[#00CEFF] bg-clip-text text-transparent">
        {locale.title}
      </div>
      <div className="mb-14 font-normal text-base text-black dark:text-white">
        {locale.description}
      </div>
      <div className="w-full max-w-7xl">
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4"
          defaultValue="item-0"
        >
          {FAQ?.map((faq, index) => (
            <div
              key={faq.question + index}
              className="p-[2px] rounded-2xl bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]"
            >
              <AccordionItem
                value={`item-${index}`}
                className="bg-[#EBF6FF] dark:bg-[#0B1020] rounded-2xl p-7"
              >
                <AccordionTrigger className="text-black dark:text-white hover:no-underline text-left font-medium text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#9696B4] text-sm leading-relaxed pt-4">
                  <div className="space-y-1">
                    {faq.answer
                      .split("\n")
                      .map(
                        (paragraph, pIndex) =>
                          paragraph.trim() && (
                            <p
                              key={pIndex}
                              dangerouslySetInnerHTML={{
                                __html: paragraph.trim(),
                              }}
                            />
                          )
                      )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

