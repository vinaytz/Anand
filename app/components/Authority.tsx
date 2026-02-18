import React from 'react';

export default function Authority() {
  return (
    <section className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-3xl font-serif text-white mb-8">Role & Leadership</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-white/10 pl-6 py-2">
                <h3 className="text-xl text-gray-200">Dean of Academics</h3>
                <p className="text-gray-500 font-sans mt-2">[University Name]</p>
              </div>
              <div className="border-l-2 border-white/10 pl-6 py-2">
                <h3 className="text-xl text-gray-200">Board Member</h3>
                <p className="text-gray-500 font-sans mt-2">Education Advisory Council</p>
              </div>
            </div>
          </div>

          <div>
             <h2 className="text-3xl font-serif text-white mb-8">Selected Engagements</h2>
             <ul className="grid grid-cols-1 gap-4">
                <li className="flex items-baseline gap-4 text-gray-400 font-light border-b border-white/5 pb-4">
                   <span className="text-white/60 font-mono text-xs">01</span>
                   <span>Guest Lecturer: IIT Delhi</span>
                </li>
                <li className="flex items-baseline gap-4 text-gray-400 font-light border-b border-white/5 pb-4">
                   <span className="text-white/60 font-mono text-xs">02</span>
                   <span>Keynote: International Leadership Forum, Dubai</span>
                </li>
                <li className="flex items-baseline gap-4 text-gray-400 font-light border-b border-white/5 pb-4">
                   <span className="text-white/60 font-mono text-xs">03</span>
                   <span>TEDx Speaker: "The Quiet Leader"</span>
                </li>
                <li className="flex items-baseline gap-4 text-gray-400 font-light border-b border-white/5 pb-4">
                   <span className="text-white/60 font-mono text-xs">04</span>
                   <span>National Education Summit Panelist</span>
                </li>
             </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
