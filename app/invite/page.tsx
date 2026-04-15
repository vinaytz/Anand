"use client";

import { useState, FormEvent } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function InvitePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-8 text-center">
        <h1 className="font-serif text-3xl md:text-5xl text-[var(--text-dark)] mb-4">
          Invite Dr. Anand
        </h1>
        <p className="text-[var(--text-body)] text-[16px] leading-relaxed font-sans max-w-xl mx-auto">
          To invite Dr. Anand K Shukla for a keynote, workshop, or guest lecture,
          kindly fill up the form below &amp; we will get in touch with you.
        </p>
      </section>

      {/* Form */}
      <section className="max-w-xl mx-auto px-6 pb-16">
        {submitted ? (
          <div className="text-center py-12">
            <h3 className="font-serif text-2xl text-[var(--text-dark)] mb-3">
              Thank You!
            </h3>
            <p className="text-[var(--text-body)] font-sans">
              Your invitation has been received. We will get in touch if your event is shortlisted.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[13px] uppercase tracking-wide text-[var(--text-body)] font-sans mb-1">
                Name *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 bg-white text-[var(--text-dark)] font-sans text-[15px] outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[13px] uppercase tracking-wide text-[var(--text-body)] font-sans mb-1">
                Email *
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 bg-white text-[var(--text-dark)] font-sans text-[15px] outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[13px] uppercase tracking-wide text-[var(--text-body)] font-sans mb-1">
                Mobile *
              </label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 border border-gray-300 bg-white text-[var(--text-dark)] font-sans text-[15px] outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[13px] uppercase tracking-wide text-[var(--text-body)] font-sans mb-1">
                Organization *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 bg-white text-[var(--text-dark)] font-sans text-[15px] outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[13px] uppercase tracking-wide text-[var(--text-body)] font-sans mb-1">
                Event Type *
              </label>
              <select
                required
                defaultValue=""
                className="w-full px-4 py-3 border border-gray-300 bg-white text-[var(--text-dark)] font-sans text-[15px] outline-none focus:border-[var(--accent)] transition-colors"
              >
                <option value="" disabled>
                  Select event type
                </option>
                <option value="keynote">Keynote Speech</option>
                <option value="workshop">Workshop</option>
                <option value="guest-lecture">Guest Lecture</option>
                <option value="panel">Panel Discussion</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-[13px] uppercase tracking-wide text-[var(--text-body)] font-sans mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 bg-white text-[var(--text-dark)] font-sans text-[15px] outline-none focus:border-[var(--accent)] transition-colors resize-vertical"
              />
            </div>

            <button
              type="submit"
              className="w-full min-h-[56px] bg-[var(--btn-bg)] text-[var(--btn-text)] text-[14px] uppercase tracking-[0.1em] font-sans font-semibold hover:bg-[var(--btn-hover)] transition-colors duration-300 cursor-pointer"
            >
              Submit Invitation
            </button>
          </form>
        )}
      </section>

      <Footer />
    </main>
  );
}
