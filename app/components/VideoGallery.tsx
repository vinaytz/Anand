import React from 'react';
import { Play } from 'lucide-react';

const videos = [
  {
    title: "The Power of Silence in Leadership",
    views: "125K Views",
    thumb: "bg-neutral-800" // In real app, put image URL here
  },
  {
    title: "Why You Feel Stuck (And How to Move)",
    views: "89K Views",
    thumb: "bg-neutral-800"
  },
  {
    title: "The Future of Education in India",
    views: "45K Views",
    thumb: "bg-neutral-800"
  }
];

export default function VideoGallery() {
  return (
    <section id="videos" className="py-24 px-6 md:px-12 bg-rich-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div className="space-y-4">
              <div className="w-12 h-1 bg-gold-500"></div>
              <h2 className="text-4xl font-serif text-white">Watch Dr. Anand in Action</h2>
           </div>
           
           <a href="https://youtube.com" target="_blank" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
              Visit YouTube Channel <span className="text-gold-500">&rarr;</span>
           </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {videos.map((video, idx) => (
             <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-video bg-neutral-900 rounded-lg overflow-hidden border border-white/10 group-hover:border-gold-500/50 transition-all duration-300">
                   {/* Thumbnail Placeholder */}
                   <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-50"></div>
                   
                   {/* Play Button */}
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-300">
                         <Play className="w-6 h-6 text-white ml-1 fill-white" />
                      </div>
                   </div>

                   {/* Duration Badge */}
                   <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs font-mono px-2 py-1 rounded">
                      12:45
                   </div>
                </div>
                
                <h3 className="mt-4 text-xl font-medium text-white group-hover:text-gold-400 transition-colors line-clamp-2">
                   {video.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{video.views}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
