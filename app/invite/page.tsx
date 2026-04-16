"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function InvitePage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      mobile: formData.get("mobile") as string,
      organisation: formData.get("organisation") as string,
      eventType: formData.get("eventType") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong. Please try again or email directly at dranand@gmail.com",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

<section className="relative w-full h-[28vh] md:h-[60vh] overflow-hidden">
  <Image
    src="/invite.png"
    alt="Invite Dr. Anand K Shukla"
    fill
    priority
    sizes="100vw"
    className="object-cover object-left md:object-center"
  />

  <div className="absolute inset-0 bg-black/40" />

  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center">
      <h1 className="font-serif text-3xl md:text-5xl text-white tracking-wide mb-2">
        Invite Dr. Anand
      </h1>
      <p className="text-white/70 text-[13px] uppercase tracking-[0.2em] font-sans">
        Keynote · Workshop · Guest Lecture
      </p>
    </div>
  </div>
</section>

      {/* Intro */}
      <section className="max-w-2xl mx-auto px-6 pt-12 pb-6 text-center">
        <p className="text-(--text-body) text-[16px] leading-relaxed font-sans">
          To invite Dr. Anand K Shukla for a speaking engagement at your
          organisation, kindly fill up the form below &amp; we will get in touch
          with you.
        </p>
      </section>

      {/* Form */}
      <section className="max-w-xl mx-auto px-6 pb-20">
        {submitted ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-(--bg-light) rounded-full">
              <svg
                className="w-8 h-8 text-(--accent)"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-(--text-dark) mb-3">
              Thank You!
            </h3>
            <p className="text-(--text-body) font-sans">
              Your invitation has been received. We will get in touch if your
              event is shortlisted.
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
                  name="name"
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
                  name="email"
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
                  name="mobile"
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
                  name="organisation"
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
                name="eventType"
                defaultValue=""
                className="w-full px-4 py-3 border border-gray-300 bg-white text-(--text-dark) font-sans text-[15px] outline-none focus:border-(--accent) transition-colors"
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
              <label className="block text-[12px] uppercase tracking-[0.15em] text-(--text-body) font-sans mb-1.5">
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                className="w-full px-4 py-3 border border-gray-300 bg-white text-(--text-dark) font-sans text-[15px] outline-none focus:border-(--accent) transition-colors resize-vertical"
              />
            </div>

            {error && (
              <p className="text-red-600 text-[14px] font-sans text-center">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="w-full min-h-14 bg-(--btn-bg) text-(--btn-text) text-[14px] uppercase tracking-widest font-sans font-semibold hover:bg-(--btn-hover) transition-colors duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : "Submit Invitation"}
            </button>
          </form>
        )}
      </section>

      <Footer />
    </main>
  );
}
