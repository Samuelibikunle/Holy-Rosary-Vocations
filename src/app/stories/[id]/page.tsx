import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { STORIES } from '@/data/stories';
import { getImageUrl } from '@/data/images';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Props {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return STORIES.map((s) => ({ id: s.id }));
}

export default function StoryDetailPage({ params }: Props) {
  const storyIndex = STORIES.findIndex((s) => s.id === params.id);
  if (storyIndex === -1) notFound();

  const story = STORIES[storyIndex];
  const nextStory = STORIES[(storyIndex + 1) % STORIES.length];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Banner */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-4">
        <div className="relative min-h-[440px] md:h-[520px] rounded-card overflow-hidden shadow-paper-lg flex items-end">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${getImageUrl(story.heroImage, 1920)})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-[#0e0d0b]/60 to-transparent" />

          <div className="relative z-10 p-6 md:p-14 lg:p-16 max-w-4xl text-white">
            <Link
              href="/stories"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-xs font-mono tracking-wider uppercase mb-6 hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> All stories
            </Link>

            <div className="text-xs font-mono uppercase tracking-wider text-amber-200 mb-2">
              {story.kicker}
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white mb-4 leading-tight">
              {story.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              {story.standfirst}
            </p>
          </div>
        </div>
      </div>

      {/* Main Story Content & Sidebar */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Paragraphs & Quote */}
        <div className="lg:col-span-8 space-y-8 text-base sm:text-lg md:text-xl text-[var(--color-text)] leading-relaxed">
          {story.paragraphs.map((para, i) => (
            <p key={i} className="text-[var(--color-text)] leading-relaxed">
              {para}
            </p>
          ))}

          {/* Testimonial Quote Callout */}
          <div className="border-l-4 border-[var(--color-accent)] pl-6 md:pl-8 py-4 my-8 bg-[var(--color-surface)] rounded-r-2xl border border-l-0 border-[var(--color-divider)]">
            <p className="font-heading text-2xl md:text-3xl text-[var(--color-text)] leading-snug mb-3">
              “{story.quote}”
            </p>
            <p className="text-sm font-mono text-[var(--color-text-muted)]">
              {story.attribution}
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 sticky top-28 space-y-5">
          {/* Ask question box */}
          <div className="bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-6 md:p-7 shadow-paper-sm">
            <h3 className="font-heading text-xl md:text-2xl text-[var(--color-text)] mb-2">
              Does this sound familiar?
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5">
              You can ask one question of the Sister who accompanies women discerning. Nothing follows from it unless you want it to.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full py-3 rounded-full bg-[var(--color-accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Begin a conversation →
            </Link>
          </div>

          {/* Next Story Link */}
          <Link
            href={`/stories/${nextStory.id}`}
            className="block bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-6 hover:border-[var(--color-accent)] transition-colors group"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
              Next story
            </div>
            <div className="flex items-center justify-between text-base font-heading text-[var(--color-accent)]">
              <span>Read another Sister&apos;s story</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Formation link */}
          <Link
            href="/formation"
            className="block bg-[var(--color-accent-light)] border border-[var(--color-divider)] rounded-card p-6 hover:border-[var(--color-accent)] transition-colors group"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
              The path she walked
            </div>
            <div className="flex items-center justify-between text-base font-heading text-[var(--color-accent)]">
              <span>Learn about the stages of formation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
