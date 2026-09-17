'use client';

import React, { useState } from 'react';
import { GALLERIES } from '@/data/gallery';
import { getImageUrl } from '@/data/images';

export function GalleryTabs() {
  const [activeTab, setActiveTab] = useState(GALLERIES[0].id);

  const currentGallery =
    GALLERIES.find((g) => g.id === activeTab) || GALLERIES[0];

  return (
    <div>
      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2.5 mb-6">
        {GALLERIES.map((gal) => {
          const isActive = gal.id === activeTab;
          return (
            <button
              key={gal.id}
              onClick={() => setActiveTab(gal.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                isActive
                  ? 'bg-[var(--color-accent)] text-white shadow-sm'
                  : 'bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-divider)] hover:bg-[var(--color-divider)]'
              }`}
            >
              {gal.label}
            </button>
          );
        })}
      </div>

      {/* Discerner's Prompt Question */}
      <p className="font-heading text-2xl md:text-3xl text-[var(--color-text)] mb-8 max-w-2xl leading-snug">
        {currentGallery.question}
      </p>

      {/* Pinned Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentGallery.images.map((imgKey, index) => {
          const tiltClass = index % 2 === 0 ? 'tilt-l' : 'tilt-r';
          return (
            <div
              key={imgKey + index}
              className={`pin ${tiltClass} rounded-2xl overflow-hidden aspect-[4/3] relative cursor-pointer group`}
            >
              <div
                className="w-full h-full bg-cover bg-center washed"
                style={{
                  backgroundImage: `url(${getImageUrl(imgKey, 640)})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-10">
                <span className="text-white text-xs font-mono tracking-wider uppercase drop-shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {currentGallery.label} · Photo {index + 1}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
