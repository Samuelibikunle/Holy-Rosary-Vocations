import React from 'react';
import Link from 'next/link';
import { HeroCarousel } from '@/components/HeroCarousel';
import { HERO_SETS } from '@/data/home';
import { getImageUrl } from '@/data/images';
import { ArrowRight } from 'lucide-react';

export default function LifePage() {
  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      {/* Hero */}
      <HeroCarousel
        imageKeys={HERO_SETS.life}
        kicker="Step 2 · Discovering us"
        title="Welcome to the Missionary Sisters of the Holy Rosary."
        subtitle="Five questions, answered honestly, for anyone wondering whether she could belong here."
      />

      {/* 4 Core Cards */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <p className="text-base md:text-lg text-[var(--color-text-muted)] max-w-3xl mb-10">
          The full history of the congregation, our regions and our publications all live on{' '}
          <a
            href="https://mshr.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] underline hover:opacity-80"
          >
            mshr.org
          </a>
          . Here is the short version, written for someone discerning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="card-hover card-shine bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-8 md:p-12 shadow-paper-sm">
            <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-text)] mb-4">
              Who are we?
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed">
              An international and intercultural congregation of women, founded in 1924 by Bishop Joseph Shanahan in Killeshandra, Ireland, and present today in fourteen countries. Teachers, nurses, catechists, social workers and advocates.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card-hover card-shine bg-[var(--color-accent-light)] border border-[var(--color-divider)] rounded-card p-8 md:p-12">
            <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-text)] mb-4">
              Why religious life?
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed">
              Because some women are given a desire to belong entirely to God and to be free enough to go anywhere for the sake of others. Vows do not shrink a life. They point it.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card-hover card-shine border border-[var(--color-divider)] bg-[var(--color-surface)] rounded-card p-8 md:p-12 shadow-paper-sm">
            <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-text)] mb-4">
              Our charism
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed">
              A readiness to be sent. We cross the borders of our own country and culture to share the Gospel with those in any kind of need, through healing, education, pastoral work and community development.
            </p>
          </div>

          {/* Card 4 */}
          <div className="card-hover card-shine border border-[var(--color-divider)] bg-[var(--color-surface)] rounded-card p-8 md:p-12 shadow-paper-sm">
            <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-text)] mb-4">
              What is our spirituality?
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed">
              Active and contemplative together. The Eucharist and the Rosary at the centre, personal silence each day, and prayer that flows into whatever work is in front of us.
            </p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-[var(--color-accent-light)] border-t border-b border-[var(--color-divider)] py-20 transition-colors">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[var(--color-text)]">
              Our community
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed">
              We live in small intercultural houses, usually three to six Sisters, often from three or four different countries. We pray together morning and evening, eat together, argue occasionally, and carry each other&apos;s work.
            </p>
            <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed">
              Community is the part most women underestimate before they come, and the part they miss most when they travel.
            </p>
            <div className="pt-2">
              <Link
                href="/stories"
                className="inline-flex items-center gap-1.5 font-heading text-base md:text-lg text-[var(--color-accent)] hover:underline"
              >
                See what community life looks like →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="pin tilt-l rounded-2xl overflow-hidden aspect-[3/4]">
              <div
                className="w-full h-full bg-cover bg-center washed"
                style={{
                  backgroundImage: `url(${getImageUrl('whoWeAre', 640)})`,
                }}
              />
            </div>
            <div className="pin tilt-r rounded-2xl overflow-hidden aspect-[3/4] mt-8">
              <div
                className="w-full h-full bg-cover bg-center washed"
                style={{
                  backgroundImage: `url(${getImageUrl('communityOutreach', 640)})`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Next in Journey */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="bg-[var(--color-accent)] text-white rounded-card p-8 md:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-paper-md">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
              Next in the journey
            </div>
            <h3 className="font-heading text-2xl md:text-3xl text-white">
              So what would I actually do?
            </h3>
          </div>
          <Link
            href="/ministries"
            className="px-8 py-4 rounded-full bg-white text-[var(--color-accent)] font-medium text-sm md:text-base hover:bg-neutral-100 transition-colors flex-shrink-0"
          >
            Explore our ministries →
          </Link>
        </div>
      </section>
    </div>
  );
}
