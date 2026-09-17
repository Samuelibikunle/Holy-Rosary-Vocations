'use client';

import React, { useState } from 'react';
import { FAQS } from '@/data/faqs';

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="divide-y divide-[var(--color-divider)]">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="py-5">
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-start justify-between gap-4 text-left group"
            >
              <h3 className="font-heading text-xl md:text-2xl text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                {faq.question}
              </h3>
              <span className="font-heading text-2xl text-[var(--color-accent)] flex-shrink-0 leading-none select-none">
                {isOpen ? '–' : '+'}
              </span>
            </button>
            {isOpen && (
              <p className="mt-3 text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-3xl animate-fadeIn">
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
