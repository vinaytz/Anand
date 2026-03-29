import React from 'react';

export default function Authority() {
  return (
    <section className="py-24 bg-[var(--th-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-3xl font-serif text-[var(--th-text)] mb-8">Role & Leadership</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-[var(--th-border-hover)] pl-6 py-2">
                <h3 className="text-xl text-[var(--th-text-2)]">Dean of Academics</h3>
                <p className="text-[var(--th-text-4)] font-sans mt-2">[University Name]</p>
              </div>
              <div className="border-l-2 border-[var(--th-border-hover)] pl-6 py-2">
                <h3 className="text-xl text-[var(--th-text-2)]">Board Member</h3>
                <p className="text-[var(--th-text-4)] font-sans mt-2">Education Advisory Council</p>
              </div>
            </div>
          </div>

          <div>
             <h2 className="text-3xl font-serif text-[var(--th-text)] mb-8">Selected Engagements</h2>
             <ul className="grid grid-cols-1 gap-4">
                <li className="flex items-baseline gap-4 text-[var(--th-text-3)] font-light border-b border-[var(--th-border-subtle)] pb-4">
                   <span className="text-[var(--th-text-4)] font-mono text-xs">01</span>
                   <span>Guest Lecturer: IIT Delhi</span>
                </li>
                <li className="flex items-baseline gap-4 text-[var(--th-text-3)] font-light border-b border-[var(--th-border-subtle)] pb-4">
                   <span className="text-[var(--th-text-4)] font-mono text-xs">02</span>
                   <span>Keynote: International Leadership Forum, Dubai</span>
                </li>
                <li className="flex items-baseline gap-4 text-[var(--th-text-3)] font-light border-b border-[var(--th-border-subtle)] pb-4">
                   <span className="text-[var(--th-text-4)] font-mono text-xs">03</span>
                   <span>TEDx Speaker: &quot;The Quiet Leader&quot;</span>
                </li>
                <li className="flex items-baseline gap-4 text-[var(--th-text-3)] font-light border-b border-[var(--th-border-subtle)] pb-4">
                   <span className="text-[var(--th-text-4)] font-mono text-xs">04</span>
                   <span>National Education Summit Panelist</span>
                </li>
             </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
