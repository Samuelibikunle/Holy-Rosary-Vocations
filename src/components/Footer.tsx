import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="mt-24 bg-[#14130f] text-[#b0a99e] pt-16 pb-10 transition-colors">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Purpose */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/images/3acc61dd-6b0d-4727-b46e-05d4e1effe3b.png"
                  alt="MSHR Emblem Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="font-heading text-lg text-[#f7f4ee]">
                Holy Rosary Vocations
              </div>
            </div>
            <p className="text-sm text-[#8e877d] leading-relaxed">
              A dedicated discernment space for young women exploring missionary religious life with the Missionary Sisters of the Holy Rosary.
            </p>
          </div>

          {/* Journey Links */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#8a8378] mb-4">
              The Journey
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/discernment" className="text-[#e9e5dc] hover:underline">
                  Discernment
                </Link>
              </li>
              <li>
                <Link href="/formation" className="text-[#e9e5dc] hover:underline">
                  Formation
                </Link>
              </li>
              <li>
                <Link href="/stories" className="text-[#e9e5dc] hover:underline">
                  Stories
                </Link>
              </li>
              <li>
                <Link href="/reflect" className="text-[#e9e5dc] hover:underline">
                  Time to Reflect
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#e9e5dc] hover:underline">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Congregation Links */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#8a8378] mb-4">
              The Congregation
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://mshr.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e9e5dc] hover:underline"
                >
                  About & History
                </a>
              </li>
              <li>
                <a
                  href="https://mshr.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e9e5dc] hover:underline"
                >
                  Latest News
                </a>
              </li>
              <li>
                <a
                  href="https://mshr.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e9e5dc] hover:underline"
                >
                  Safeguarding
                </a>
              </li>
              <li>
                <a
                  href="https://mshr.org/donate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e9e5dc] hover:underline"
                >
                  Support the Mission
                </a>
              </li>
            </ul>
          </div>

          {/* Vocation Team */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#8a8378] mb-4">
              Vocation Team
            </div>
            <div className="text-sm text-[#d8d3c8] leading-relaxed space-y-1.5">
              <div>
                <a href="tel:+2347055159331" className="hover:underline">
                  +234 705 515 9331
                </a>
              </div>
              <div>
                <a href="mailto:holyrosaryvocations99@gmail.com" className="hover:underline">
                  holyrosaryvocations99@gmail.com
                </a>
              </div>
              <div className="text-[#8e877d] pt-1">P.O. Box 9677, Enugu, Nigeria</div>
            </div>
          </div>
        </div>

        {/* Bottom divider & copyright */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8a8378]">
          <div>© {new Date().getFullYear()} Missionary Sisters of the Holy Rosary</div>
          <div>Congregational information lives at mshr.org. This site is for discernment.</div>
        </div>
      </div>
    </footer>
  );
}
