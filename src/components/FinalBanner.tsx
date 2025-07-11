import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const FinalBanner = () => {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-20 w-32 h-32 bg-rose-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-100 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-rose-300 opacity-10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              fontSize: `${8 + Math.random() * 6}px`
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="relative">
          <h2 className="text-5xl md:text-7xl font-light text-gray-800 mb-12 relative tracking-wide">
            <span className="font-serif italic">
              Te amo
            </span>
          </h2>
        </div>

        <p className="text-lg md:text-xl text-gray-500 mb-12 font-light">
          Con todo mi ser, con toda mi alma.
        </p>
        <div className="bg-white/40 backdrop-blur-sm rounded-lg p-8 shadow-sm max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
            Quiero despertar mirandote, quiero despertar contigo.
            Quiero que mi vida sea contigo, quiero bailar a tu ritmo.
            Quiero que el amor siempre esté, quiero que el amor siempre sea el tuyo.
            Quiero que me mires, quiero que me desees. 
            Te deseo, te deseo desde lo más profundo de mi ser.
            Mi alma siempre te pertenecerá, mi existencia es solo para ti.
          </p>
          
          <div className="mt-6 text-center">
            <div className="text-gray-500 font-light">
              Siempre tuyo, Jorge ❤️
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <Heart
              key={i}
              className="text-rose-300 opacity-60"
              style={{
                fontSize: `${16 + i * 2}px`
              }}
              fill="currentColor"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalBanner;