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
      sessionTopic: formData.get("sessionTopic") as string,
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
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError(
        "Something went wrong. Please try again or email directly at invite@theanandshukla.com",
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
    src="/gallery/stage_podium1.jpeg"
    alt="Invite Dr. Anand K Shukla"
    fill
    priority
    sizes="100vw"
className="object-cover object-[center_40%]"
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
                Session Topic *
              </label>
              <select
                required
                name="sessionTopic"
                defaultValue=""
                className="w-full px-4 py-3 border border-gray-300 bg-white text-(--text-dark) font-sans text-[15px] outline-none focus:border-(--accent) transition-colors"
              >
                <option value="" disabled>
                  Select session topic
                </option>
                <option value="motivational">Motivational</option>
                <option value="career-growth">Career Growth</option>
                <option value="technical-ai-ml">Technical — AI &amp; Machine Learning</option>
                <option value="technical-python-java">Technical — Python / Java</option>
                <option value="technical-general">Technical (General)</option>
                <option value="spirituality">Spirituality</option>
                <option value="other">Other</option>
              </select>
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

      {/* Direct Contact */}
      <section className="w-full bg-linear-to-br from-[#0a1628] to-[#112240] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          {/* Decorative envelope icon */}
          <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center ring-1 ring-white/20">
            <svg className="w-7 h-7 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <p className="text-white/50 text-[11px] uppercase tracking-[0.35em] font-sans mb-4">
            Prefer to reach out directly?
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wide mb-5">
            Write to Us
          </h2>
          <p className="text-white/60 text-[16px] md:text-[17px] leading-relaxed font-sans mb-10 max-w-xl mx-auto">
            For speaking invitations, collaborations, or any enquiries — reach
            Dr. Anand&apos;s team directly. We typically respond within 2–3 business days.
          </p>

          {/* CTA email button */}
          <a
            href="mailto:invite@theanandshukla.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0a1628] font-sans text-[14px] md:text-[15px] font-semibold uppercase tracking-[0.15em] no-underline hover:bg-white/90 transition-all duration-300"
          >
            <svg className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            invite@theanandshukla.com
          </a>

          <p className="text-white/30 text-[12px] font-sans mt-6 tracking-wide">
            Or use the form above to submit your invitation details.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
