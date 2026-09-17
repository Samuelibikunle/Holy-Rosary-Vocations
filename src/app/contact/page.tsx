import React from 'react';
import { HeroCarousel } from '@/components/HeroCarousel';
import { ContactForm } from '@/components/ContactForm';
import { HERO_SETS, COUNTRY_CONTACTS } from '@/data/home';
import { MessageCircle, Phone, Globe } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      {/* Hero */}
      <HeroCarousel
        imageKeys={HERO_SETS.contact}
        kicker="Step 5 · The next step"
        title="There is no obligation. Just a conversation."
        subtitle="Write, call, or send a message, whichever feels easiest."
      />

      {/* Main Grid */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Interactive Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Right Column: Direct Voice / WhatsApp & Country Directory */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Voice / WhatsApp Box */}
          <div className="bg-[var(--color-accent-light)] border border-[var(--color-divider)] rounded-card p-8">
            <h3 className="font-heading text-2xl text-[var(--color-text)] mb-3">
              Would you rather talk?
            </h3>
            <p className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed mb-6">
              Ask for a short, no-pressure conversation by phone or video. Thirty minutes, at a time that suits you.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/2347055159331"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--color-accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp the team
              </a>
              <a
                href="tel:+2347055159331"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--color-divider)] bg-[var(--color-surface)] text-[var(--color-text)] text-sm font-medium hover:bg-[var(--color-divider)] transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call us
              </a>
            </div>
          </div>

          {/* Directory by Country */}
          <div className="bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-8 shadow-paper-sm">
            <h3 className="font-heading text-2xl text-[var(--color-text)] mb-2">
              Vocation contacts by country
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] mb-6">
              Connect directly with a Sister near your region.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COUNTRY_CONTACTS.map((c) => (
                <div key={c.place} className="border-b border-[var(--color-divider)] pb-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)]">
                    {c.place}
                  </div>
                  <div className="text-sm font-medium text-[var(--color-text)] mt-0.5">
                    {c.tel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global MSHR Website Banner */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-8 md:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-paper-sm">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl text-[var(--color-text)] mb-2">
              Everything else about the congregation
            </h3>
            <p className="text-base text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
              General enquiries, regions, publications, safeguarding and giving are all held on the congregational website, so there is only ever one place to look.
            </p>
          </div>
          <a
            href="https://mshr.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--color-divider)] text-[var(--color-text)] font-medium text-sm md:text-base hover:bg-[var(--color-divider)] transition-colors flex-shrink-0"
          >
            <Globe className="w-4 h-4" />
            Visit mshr.org →
          </a>
        </div>
      </section>
    </div>
  );
}
