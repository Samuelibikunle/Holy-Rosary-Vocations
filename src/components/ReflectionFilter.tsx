'use client';

import React, { useState } from 'react';
import { REFLECTIONS, REFLECT_TAGS } from '@/data/reflections';
import { getImageUrl } from '@/data/images';

export function ReflectionFilter() {
  const [activeTag, setActiveTag] = useState<string>('All');

  const filtered =
    activeTag === 'All'
      ? REFLECTIONS
      : REFLECTIONS.filter((r) => r.tag === activeTag);

  return (
    <div>
      {/* Tag filter bar */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {REFLECT_TAGS.map((tag) => {
          const isActive = tag === activeTag;
          return (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                isActive
                  ? 'bg-[var(--color-accent)] text-white shadow-sm'
                  : 'bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-divider)] hover:bg-[var(--color-divider)]'
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* Reflections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((ref, idx) => {
          const tilt = idx % 2 === 0 ? 'tilt-l' : 'tilt-r';
          return (
            <div
              key={ref.id}
              className="card-hover card-shine bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card overflow-hidden shadow-paper-sm flex flex-col group cursor-pointer"
            >
              <div className={`pin ${tilt} aspect-[16/10] overflow-hidden`}>
                <div
                  className="w-full h-full bg-cover bg-center washed"
                  style={{
                    backgroundImage: `url(${getImageUrl(ref.imageKey, 640)})`,
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)] font-semibold mb-2">
                  {ref.tag}
                </span>
                <h3 className="font-heading text-2xl text-[var(--color-text)] mb-3">
                  {ref.title}
                </h3>
                <p className="text-base text-[var(--color-text-muted)] leading-relaxed flex-1">
                  {ref.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
