import React from 'react';

interface TestimonialCardProps {
  name: string;
  quote: string;
}

export default function TestimonialCard({ name, quote }: TestimonialCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 h-full flex flex-col">
      <blockquote className="flex-1 text-lg text-gray-100 mb-6 leading-relaxed">
        "{quote}"
      </blockquote>
      <footer className="text-[#cc9832] font-semibold">
        — {name}
      </footer>
    </div>
  );
}
