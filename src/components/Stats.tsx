import React from 'react';
import { Users, TrendingUp, Brain } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '4.9B',
    label: 'Users Online Right Now',
    color: 'text-blue-500'
  },
  {
    icon: TrendingUp,
    value: '77%',
    label: 'Read Blogs Weekly',
    color: 'text-green-500'
  },
  {
    icon: Brain,
    value: '2030',
    label: '$1T Creator Economy',
    color: 'text-purple-500'
  }
];

export default function Stats() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Internet Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a revolutionary platform that empowers you to stand out among 8 billion Personal Monopolies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 text-center transform hover:scale-105 transition-all">
              <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}