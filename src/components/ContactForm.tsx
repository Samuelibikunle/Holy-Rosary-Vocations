'use client';

import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    country: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-8 md:p-10 shadow-paper-sm text-center flex flex-col items-center justify-center min-h-[400px]">
        <CheckCircle2 className="w-16 h-16 text-[var(--color-accent)] mb-4 animate-bounce" />
        <h3 className="font-heading text-3xl mb-3 text-[var(--color-text)]">
          Thank you, {formData.name || 'sister'}!
        </h3>
        <p className="text-base md:text-lg text-[var(--color-text-muted)] max-w-md mx-auto mb-6">
          Your message has been received by our Vocation Directress. She will read it prayerfully and write back to your email within a few days.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', age: '', email: '', country: '', message: '' });
          }}
          className="text-sm font-medium text-[var(--color-accent)] hover:underline"
        >
          Send another question
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-8 md:p-10 shadow-paper-sm"
    >
      <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-text)] mb-2">
        Write to the Vocation Directress
      </h2>
      <p className="text-base text-[var(--color-text-muted)] mb-8">
        She reads these personally. Expect a thoughtful reply within a few days.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-1.5">
            Your name
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Name"
            className="w-full px-4 py-3 rounded-full bg-[var(--color-bg)] border border-[var(--color-divider)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-1.5">
            Your age
          </label>
          <input
            type="text"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            placeholder="e.g. 22"
            className="w-full px-4 py-3 rounded-full bg-[var(--color-bg)] border border-[var(--color-divider)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-1.5">
            Email address
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-full bg-[var(--color-bg)] border border-[var(--color-divider)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-1.5">
            Your country
          </label>
          <input
            type="text"
            required
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            placeholder="Country of residence"
            className="w-full px-4 py-3 rounded-full bg-[var(--color-bg)] border border-[var(--color-divider)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-1.5">
          What would you like to ask?
        </label>
        <textarea
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="You can write as little or as much as you like. All questions are welcome."
          className="w-full px-4 py-3 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-divider)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--color-accent)] text-white text-base font-medium hover:opacity-90 transition-opacity shadow-sm disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
        {loading ? 'Sending...' : 'Send my message'}
      </button>

      <p className="text-xs text-[var(--color-text-muted)] mt-4">
        Your message goes directly to the vocation team. Nothing is ever added to any mailing list.
      </p>
    </form>
  );
}
