'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { NAV_GROUPS } from '@/data/navigation';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [openGroup, setOpenGroup] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[var(--color-banner-bg)] text-[var(--color-banner-text)] text-xs md:text-sm py-2 px-4 md:px-8 transition-colors">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-[11px] uppercase tracking-wider font-mono">
              This month
            </span>
            <span className="opacity-90">
              October is dedicated to the Rosary. A new short reflection is added each week.
            </span>
          </div>
          <Link
            href="/reflect"
            className="text-white hover:underline whitespace-nowrap text-xs md:text-sm font-medium"
          >
            Read this week&apos;s reflection →
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-divider)] transition-colors">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="relative w-11 h-11 transition-transform group-hover:scale-105">
              <Image
                src="/images/3acc61dd-6b0d-4727-b46e-05d4e1effe3b.png"
                alt="MSHR Emblem Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="font-heading text-lg tracking-tight text-[var(--color-text)]">
                Holy Rosary Vocations
              </div>
              <div className="text-[11px] tracking-wider uppercase text-[var(--color-text-muted)] font-mono">
                Missionary Sisters
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_GROUPS.map((group, index) => {
              const isActive =
                pathname === group.href ||
                group.sub.some((s) => pathname.startsWith(s.href));

              return (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => group.sub.length > 0 && setOpenGroup(index)}
                  onMouseLeave={() => group.sub.length > 0 && setOpenGroup(null)}
                >
                  <Link
                    href={group.href}
                    className={`inline-flex items-center gap-1 text-sm px-3.5 py-2 rounded-full font-medium transition-all ${
                      isActive
                        ? 'bg-[var(--color-accent)] text-white shadow-sm'
                        : 'text-[var(--color-text)] hover:bg-[var(--color-divider)]'
                    }`}
                  >
                    {group.label}
                    {group.sub.length > 0 && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${
                          openGroup === index ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {group.sub.length > 0 && openGroup === index && (
                    <div className="absolute top-full left-0 pt-2 min-w-[270px] z-50">
                      <div className="bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-2xl shadow-paper-lg p-2 flex flex-col gap-1 backdrop-blur-lg">
                        {group.sub.map((subItem) => {
                          const isSubActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`p-3 rounded-xl transition-colors ${
                                isSubActive
                                  ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                                  : 'hover:bg-[var(--color-divider)]'
                              }`}
                            >
                              <div className="text-sm font-medium text-[var(--color-text)]">
                                {subItem.label}
                              </div>
                              <div className="text-xs text-[var(--color-text-muted)] mt-0.5">
                                {subItem.note}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full border border-[var(--color-divider)] flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--color-divider)] transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Donate Button */}
            <a
              href="https://mshr.org/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center text-xs md:text-sm font-medium px-4 py-2 rounded-full border border-[var(--color-divider)] text-[var(--color-text)] hover:bg-[var(--color-divider)] transition-colors whitespace-nowrap"
            >
              Support the mission
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden w-9 h-9 rounded-full border border-[var(--color-divider)] flex items-center justify-center text-[var(--color-text)]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[var(--color-divider)] bg-[var(--color-surface)] px-6 py-4 space-y-3">
            {NAV_GROUPS.map((group) => (
              <div key={group.label} className="border-b border-[var(--color-divider)]/40 pb-2">
                <Link
                  href={group.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-[var(--color-text)] py-1"
                >
                  {group.label}
                </Link>
                {group.sub.length > 0 && (
                  <div className="pl-4 space-y-1.5 mt-1">
                    {group.sub.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] py-1"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2">
              <a
                href="https://mshr.org/donate"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-sm font-medium py-2.5 rounded-full bg-[var(--color-accent)] text-white"
              >
                Support the mission
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
