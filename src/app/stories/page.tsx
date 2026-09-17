import React from 'react';
import Link from 'next/link';
import { HeroCarousel } from '@/components/HeroCarousel';
import { GalleryTabs } from '@/components/GalleryTabs';
import { HERO_SETS } from '@/data/home';
import { STORIES } from '@/data/stories';
import { getImageUrl } from '@/data/images';
import { ArrowRight } from 'lucide-react';

export default function StoriesPage() {
  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      {/* Hero */}
      <HeroCarousel
        imageKeys={HERO_SETS.stories}
        kicker="Step 3 · Imagining your life"
        title="Discover community life through our shared moments."
        subtitle="Not news. Stories, from Sisters who once sat exactly where you are sitting."
      />

      {/* Stories Grid */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STORIES.map((story, idx) => {
            const tilt = idx % 2 === 0 ? 'tilt-l' : 'tilt-r';
            return (
              <Link
                key={story.id}
                href={`/stories/${story.id}`}
                className="card-hover card-shine bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card overflow-hidden shadow-paper-sm flex flex-col sm:flex-row group hover:border-[var(--color-accent)] transition-all"
              >
                <div className={`sm:w-5/12 pin ${tilt} aspect-[4/3] sm:aspect-auto overflow-hidden`}>
                  <div
                    className="w-full h-full bg-cover bg-center washed"
                    style={{
                      backgroundImage: `url(${getImageUrl(story.cardImage, 640)})`,
                    }}
                  />
                </div>
                <div className="sm:w-7/12 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)] font-semibold mb-2 block">
                      {story.kicker}
                    </span>
                    <h3 className="font-heading text-2xl text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors mb-3">
                      {story.title}
                    </h3>
                    <p className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed">
                      {story.standfirst}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center text-sm font-medium text-[var(--color-accent)]">
                    {story.cta} <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Question-based Gallery */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="mb-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-text)] mb-2">
            The gallery, by question
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text-muted)]">
            Each set of photographs answers something a discerner actually wants to know.
          </p>
        </div>
        <GalleryTabs />
      </section>

      {/* Next in Journey */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-8 md:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-paper-sm">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
              Next in the journey
            </div>
            <h3 className="font-heading text-2xl md:text-3xl text-[var(--color-text)]">
              Could this be me? The practical questions come next.
            </h3>
          </div>
          <Link
            href="/faq"
            className="px-8 py-4 rounded-full bg-[var(--color-accent)] text-white font-medium text-sm md:text-base hover:opacity-90 transition-opacity flex-shrink-0"
          >
            See frequently asked questions →
          </Link>
        </div>
      </section>
    </div>
  );
}
