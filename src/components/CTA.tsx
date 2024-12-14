import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

export default function CTA() {
  return (
    <div className="bg-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          The Digital Future Waits for No One
        </h2>
        <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
          Limited slots available. Join now to secure your position in the next generation of digital creators.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="group bg-white text-blue-900 text-lg font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <span>Secure Your Spot</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex items-center text-blue-200">
            <Clock className="w-6 h-6 mr-2" />
            <span>Next cohort starting soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}