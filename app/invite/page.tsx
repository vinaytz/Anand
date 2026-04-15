"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
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

      {/* Hero Banner */}
      <section className="relative w-full h-[35vh] md:h-[45vh] overflow-hidden">
        <Image
          src="/gallery/stage.jpeg"
          alt="Invite Dr. Anand K Shukla"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "59% 33%" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl md:text-5xl text-white tracking-wide mb-2">
              Invite Dr. Anand
            </h1>
            <p className="text-white/70 text-[13px] uppercase tracking-[0.2em] font-sans">
              Keynote &middot; Workshop &middot; Guest Lecture
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-2xl mx-auto px-6 pt-12 pb-6 text-center">
        <p className="text-(--text-body) text-[16px] leading-relaxed font-sans">
          To invite Dr. Anand K Shukla for a speaking engagement at your organisation,
          kindly fill up the form below &amp; we will get in touch with you.
        </p>
      </section>

      {/* Form */}
      <section className="max-w-xl mx-auto px-6 pb-20">
        {submitted ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-(--bg-light) rounded-full">
              <svg className="w-8 h-8 text-(--accent)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-(--text-dark) mb-3">
              Thank You!
            </h3>
            <p className="text-(--text-body) font-sans">
              Your invitation has been received. We will get in touch if your event is shortlisted.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[12px] uppercase tracking-[0.15em] text-(--text-body) font-sans mb-1.5">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-(--text-dark) font-sans text-[15px] outline-none focus:border-(--accent) transition-colors"
                />
              </div>
              <div>
                <label className="block text-[12px] uppercase tracking-[0.15em] text-(--text-body) font-sans mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-(--text-dark) font-sans text-[15px] outline-none focus:border-(--accent) transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[12px] uppercase tracking-[0.15em] text-(--text-body) font-sans mb-1.5">
                  Mobile *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-(--text-dark) font-sans text-[15px] outline-none focus:border-(--accent) transition-colors"
                />
              </div>
              <div>
                <label className="block text-[12px] uppercase tracking-[0.15em] text-(--text-body) font-sans mb-1.5">
                  Organisation *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-(--text-dark) font-sans text-[15px] outline-none focus:border-(--accent) transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[12px] uppercase tracking-[0.15em] text-(--text-body) font-sans mb-1.5">
                Event Type *
              </label>
              <select
                required
                defaultValue=""
                className="w-full px-4 py-3 border border-gray-300 bg-white text-(--text-dark) font-sans text-[15px] outline-none focus:border-(--accent) transition-colors"
              >
                <option value="" disabled>Select event type</option>
                <option value="keynote">Keynote Speech</option>
                <option value="workshop">Workshop</option>
                <option value="guest-lecture">Guest Lecture</option>
                <option value="panel">Panel Discussion</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-[12px] uppercase tracking-[0.15em] text-(--text-body) font-sans mb-1.5">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 bg-white text-(--text-dark) font-sans text-[15px] outline-none focus:border-(--accent) transition-colors resize-vertical"
              />
            </div>

            <button
              type="submit"
              className="w-full min-h-14 bg-(--btn-bg) text-(--btn-text) text-[14px] uppercase tracking-widest font-sans font-semibold hover:bg-(--btn-hover) transition-colors duration-300 cursor-pointer"
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
