import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  const handleDownloadBrochure = () => {
    const pdfUrl = '/brochure.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Accelewrite-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#121b54] via-[#1b2a7f] to-[#121b54] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-30 bg-cover bg-center" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Logo"
          className="w-24 sm:w-32 md:w-40 mb-6 animate-pulse"
        />

        {/* Heading */}
        <h1 className="text-3xl sm:text-lg md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-snug">
          Master the Art of Digital Writing.<br />
          <span className="text-[#cc9832]">Own Your Space on the Internet.</span>
        </h1>

        {/* Paragraph */}
        <p className="text-lg sm:text-md md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-xl sm:max-w-3xl">
          Transform your writing into a powerful digital presence. Join the $1 trillion creator economy 
          and build your Personal Monopoly in the global digital landscape.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="https://forms.gle/5QtMaD1JyGGbKKA69"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#cc9832] hover:bg-[#a87a29] text-white text-lg font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <span>Secure Your Spot</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={handleDownloadBrochure}
            className="group bg-[#cc9832] hover:bg-[#a87a29] text-white text-lg font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <span>Download Brochure</span>
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
