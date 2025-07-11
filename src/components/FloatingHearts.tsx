import React from 'react';
import { Heart } from 'lucide-react';

const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <Heart
          key={i}
          className="absolute text-rose-200 opacity-5 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${12 + Math.random() * 6}s`,
            fontSize: `${6 + Math.random() * 8}px`
          }}
          fill="currentColor"
        />
      ))}
    </div>
  );
};

export default FloatingHearts;