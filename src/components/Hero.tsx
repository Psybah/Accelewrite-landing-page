import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#121b54] via-[#1b2a7f] to-[#121b54] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-30 bg-cover bg-center" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Use the logo */}
        <img
          src="/logo.svg"
          alt="Logo"
          className="mb-8 animate-pulse filter invert"
        />

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Master the Art of Digital Writing.<br />
          <span className="text-[#cc9832]">Own Your Space on the Internet.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl">
          Transform your writing into a powerful digital presence. Join the $1 trillion creator economy 
          and build your Personal Monopoly in the global digital landscape.
        </p>

        <button className="group bg-[#cc9832] hover:bg-[#a87a29] text-white text-lg font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
          <span>Join the Movement</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
