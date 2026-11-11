"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import type { FaqQA } from "@/lib/jsonld";

/**
 * Animated homepage FAQ accordion. The questions and answers are the same
 * ones published in the FAQPage JSON-LD (passed in from the server page),
 * so the visible copy and the structured data never drift apart.
 */
export function FaqList({ faqs }: { faqs: FaqQA[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list reveal">
      {faqs.map((faq, index) => {
        const open = openIndex === index;
        return (
          <div className="faq-item" key={faq.question}>
            <h3>
              <button
                type="button"
                className="faq-button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span>{faq.question}</span>
                <Plus size={18} className="faq-icon" aria-hidden="true" />
              </button>
            </h3>
            <div className={`faq-panel${open ? " open" : ""}`}>
              <div className="faq-panel-inner">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
