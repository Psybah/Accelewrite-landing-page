import React from 'react';
import { Target, Lightbulb, TrendingUp, Users } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Build Your Personal Monopoly',
    description: 'Create a unique digital presence that sets you apart in the global creator economy.'
  },
  {
    icon: Lightbulb,
    title: 'Data-Driven Content Creation',
    description: 'Learn to craft compelling content backed by analytics and audience insights.'
  },
  {
    icon: TrendingUp,
    title: 'Monetization Strategies',
    description: 'Transform your writing into multiple revenue streams in the digital marketplace.'
  },
  {
    icon: Users,
    title: 'Community Building',
    description: 'Develop a loyal following and create lasting impact in your niche.'
  }
];

export default function Benefits() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Writing Journey
          </h2>
          <p className="text-xl text-gray-600">
            Unlock powerful tools and strategies to dominate the digital space
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <benefit.icon className="w-12 h-12 text-[#cc9832] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
