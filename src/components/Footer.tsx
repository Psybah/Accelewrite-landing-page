import React from 'react';
import { Instagram, Twitter, Facebook, Download } from 'lucide-react';

export default function Footer() {
  const socials = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/accelewritea/profilecard/?igsh=MXAyd2xmdHM4dTEzeg==',
      label: 'Follow us on Instagram'
    },
    {
      icon: Twitter,
      href: 'https://x.com/pisonaccel?t=GK5trl_ZboHixZP0tj_JJw&s=09',
      label: 'Follow us on X (Twitter)'
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/profile.php?id=61570493459062',
      label: 'Follow us on Facebook'
    }
  ];

  return (
    <footer className="bg-[#121b54] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-6">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#cc9832] transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Accelewrite. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
