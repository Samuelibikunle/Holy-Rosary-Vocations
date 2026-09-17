import React from 'react';
import Link from 'next/link';
import { HeroCarousel } from '@/components/HeroCarousel';
import { HERO_SETS, SIGNS_OF_VOCATION, DISCERN_STEPS } from '@/data/home';
import { PRAYER_RESOURCES } from '@/data/formation';
import { getImageUrl } from '@/data/images';
import { ArrowRight } from 'lucide-react';

export default function DiscernmentPage() {
  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      {/* Hero */}
      <HeroCarousel
        imageKeys={HERO_SETS.discernment}
        kicker="Step 1 · Am I called?"
        title="Discernment begins with a question, not an answer."
        subtitle="Nobody arrives certain. Discernment is the slow, prayerful work of noticing what God has already been doing in you."
      />

      {/* Signs of a Vocation */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-text)] mb-3">
          Signs of a vocation
        </h2>
        <p className="text-base md:text-lg text-[var(--color-text-muted)] max-w-2xl mb-10">
          None of these settles the matter on its own. Together, they are worth paying attention to.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SIGNS_OF_VOCATION.map((sign) => (
            <div
              key={sign.title}
              className="card-hover card-shine bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-8 shadow-paper-sm flex flex-col justify-between"
            >
              <h3 className="font-heading text-2xl mb-3 text-[var(--color-text)]">
                {sign.title}
              </h3>
              <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
                {sign.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Discern: Rhythm & Pinned Photo */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-text)]">
              How to discern
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text-muted)]">
              A rhythm you can begin this week, wherever you are in the world.
            </p>
            <div className="pin tilt-l rounded-2xl overflow-hidden aspect-[4/3]">
              <div
                className="w-full h-full bg-cover bg-center washed"
                style={{
                  backgroundImage: `url(${getImageUrl('novitiate', 640)})`,
                }}
              />
            </div>
          </div>

          <div className="lg:col-span-7 divide-y divide-[var(--color-divider)]">
            {DISCERN_STEPS.map((step) => (
              <div key={step.n} className="py-6 first:pt-0 flex items-start gap-6">
                <span className="font-heading text-3xl md:text-4xl text-[var(--color-accent)] font-mono flex-shrink-0">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-heading text-2xl text-[var(--color-text)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prayer Resources & Spiritual Direction */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Prayer Resources Card */}
          <div className="card-hover card-shine bg-[var(--color-accent-light)] border border-[var(--color-divider)] rounded-card p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-heading text-3xl mb-3 text-[var(--color-text)]">
                Prayer resources
              </h3>
              <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed mb-6">
                Short prayers and scripture for discernment, a daily examen, and quiet contemplation.
              </p>
              <div className="space-y-3">
                {PRAYER_RESOURCES.map((res) => (
                  <Link
                    key={res.id}
                    href={`/formation/prayer-${res.id}`}
                    className="block text-base md:text-lg font-heading text-[var(--color-accent)] hover:underline group"
                  >
                    {res.title} →
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Spiritual Direction Card */}
          <div className="card-hover card-shine bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-8 md:p-10 flex flex-col justify-between shadow-paper-sm">
            <div>
              <h3 className="font-heading text-3xl mb-3 text-[var(--color-text)]">
                Spiritual direction
              </h3>
              <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed mb-6">
                Discernment is not done alone. A spiritual director listens with you over months, without pushing you towards any decision.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-base font-heading text-[var(--color-accent)] hover:underline group"
            >
              Ask us to help you find a director →
            </Link>
          </div>
        </div>
      </section>

      {/* Next in the Journey */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-8 md:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-paper-sm">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
              Next in the journey
            </div>
            <h3 className="font-heading text-2xl md:text-3xl text-[var(--color-text)]">
              If the question stays with you, what happens next?
            </h3>
          </div>
          <Link
            href="/formation"
            className="px-8 py-4 rounded-full bg-[var(--color-accent)] text-white font-medium text-sm md:text-base hover:opacity-90 transition-opacity flex-shrink-0"
          >
            Learn about the stages of formation →
          </Link>
        </div>
      </section>
    </div>
  );
}
