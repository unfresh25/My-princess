import React from 'react';

const LoveEnvelope = ({ title, content, hovered, setHovered, onClick }) => {
  return (
    <div className="grid place-items-center perspective-1000">
      <div 
        className="relative w-[300px] h-[230px] cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full origin-top transition-transform duration-700`}
          style={{
            transform: hovered ? 'rotateX(-180deg)' : 'rotateX(0deg)',
          }}
        >
          <div className="absolute z-20 border-t-[130px] border-t-yellow-200 border-r-[150px] border-r-transparent border-l-[150px] border-l-transparent"></div>
        </div>

        <div className="absolute bottom-0 left-0 z-10 border-t-[130px] border-t-transparent border-r-[150px] border-r-yellow-100 border-l-[150px] border-l-yellow-100 border-b-[100px] border-b-yellow-100"></div>

        <div
          className={`absolute inset-0 bg-white p-6 transition-all duration-700`}
          style={{
            transform: hovered ? 'translateY(0)' : 'translateY(100%)',
            opacity: hovered ? 1 : 0,
            visibility: hovered ? 'visible' : 'hidden'
          }}
        >
          <strong className="block mb-2">{title}</strong>
          <p className="text-sm text-gray-700 leading-relaxed">
            {content.substring(0, 120)}...
          </p>
        </div>

        <div 
          className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center absolute left-1/2 z-30 shadow transition-all duration-700"
          style={{
            top: hovered ? '-140px' : '90px',
            opacity: hovered ? 0.3 : 1,
            transform: `translateX(-50%) scale(${hovered ? 0.7 : 1})`
          }}
        >
          ❤️
        </div>
      </div>
    </div>
  );
};

export default LoveEnvelope;