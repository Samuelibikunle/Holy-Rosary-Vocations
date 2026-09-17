import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { STAGES, PRAYER_RESOURCES } from '@/data/formation';
import { getImageUrl } from '@/data/images';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Props {
  params: {
    stage: string;
  };
}

export function generateStaticParams() {
  const stageParams = STAGES.map((s) => ({ stage: s.id }));
  const prayerParams = PRAYER_RESOURCES.map((p) => ({ stage: `prayer-${p.id}` }));
  return [...stageParams, ...prayerParams];
}

export default function StageDetailPage({ params }: Props) {
  const isPrayer = params.stage.startsWith('prayer-');

  let title = '';
  let kicker = '';
  let standfirst = '';
  let imageKey = '';
  let alt = '';
  let paragraphs: string[] = [];
  let nextHref = '';
  let nextLabel = '';

  if (isPrayer) {
    const prayerId = params.stage.replace('prayer-', '');
    const resource = PRAYER_RESOURCES.find((p) => p.id === prayerId);
    if (!resource) notFound();

    title = resource.title;
    kicker = 'Prayer Resource';
    standfirst = resource.standfirst;
    imageKey = resource.imageKey;
    alt = resource.alt;
    paragraphs = resource.paragraphs;
    nextHref = '/discernment';
    nextLabel = 'Back to Discernment';
  } else {
    const stageIndex = STAGES.findIndex((s) => s.id === params.stage);
    if (stageIndex === -1) notFound();

    const stage = STAGES[stageIndex];
    title = stage.title;
    kicker = `Stage ${stage.stepNumber} of formation · ${stage.length}`;
    standfirst = stage.standfirst;
    imageKey = stage.imageKey;
    alt = stage.alt;
    paragraphs = stage.paragraphs;

    const nextStage = STAGES[(stageIndex + 1) % STAGES.length];
    nextHref = `/formation/${nextStage.id}`;
    nextLabel = `${nextStage.title} (${nextStage.length})`;
  }

  return (
    <div className="space-y-16 pb-20">
      {/* Top Hero Banner */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-4">
        <div className="relative min-h-[420px] md:h-[500px] rounded-card overflow-hidden shadow-paper-lg flex items-end">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${getImageUrl(imageKey, 1920)})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-[#0e0d0b]/60 to-transparent" />

          <div className="relative z-10 p-6 md:p-14 lg:p-16 max-w-4xl text-white">
            <Link
              href={isPrayer ? '/discernment' : '/formation'}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-xs font-mono tracking-wider uppercase mb-6 hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              {isPrayer ? 'All prayer resources' : 'All stages of formation'}
            </Link>

            <div className="text-xs font-mono uppercase tracking-wider text-amber-200 mb-2">
              {kicker}
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              {standfirst}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content & Sidebar */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Paragraphs */}
        <div className="lg:col-span-8 space-y-6 text-base sm:text-lg md:text-xl text-[var(--color-text)] leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-[var(--color-text)] leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 sticky top-28 space-y-5">
          {/* Ask question box */}
          <div className="bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-6 md:p-7 shadow-paper-sm">
            <h3 className="font-heading text-xl md:text-2xl text-[var(--color-text)] mb-2">
              {isPrayer ? 'Would you like to pray with someone?' : 'Questions about this stage?'}
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5">
              {isPrayer
                ? 'A Sister can pray with you, or help you find a spiritual director near you. There is no obligation attached to asking.'
                : 'Ask the Sister who accompanies women discerning. There is no obligation attached to asking.'}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full py-3 rounded-full bg-[var(--color-accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Begin a conversation →
            </Link>
          </div>

          {/* Next Stage Link */}
          {!isPrayer && (
            <Link
              href={nextHref}
              className="block bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-6 hover:border-[var(--color-accent)] transition-colors group"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
                Next stage
              </div>
              <div className="flex items-center justify-between text-base font-heading text-[var(--color-accent)]">
                <span>{nextLabel}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          )}

          {/* From a Sister Stories Link */}
          <Link
            href="/stories"
            className="block bg-[var(--color-accent-light)] border border-[var(--color-divider)] rounded-card p-6 hover:border-[var(--color-accent)] transition-colors group"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
              From a Sister
            </div>
            <div className="flex items-center justify-between text-base font-heading text-[var(--color-accent)]">
              <span>Hear how this felt in practice</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Practical Questions FAQ Link */}
          <Link
            href="/faq"
            className="block bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-6 hover:border-[var(--color-accent)] transition-colors group"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
              Practical questions
            </div>
            <div className="flex items-center justify-between text-base font-heading text-[var(--color-accent)]">
              <span>Requirements and common questions</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
