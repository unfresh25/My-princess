import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(0);
  const audioRef = useRef(null);

  const records = [
    { title: "Jamás me cansaré de ti", artist: "Samuel Morales", color: "bg-gray-800", audio: "/audio/Jamás me cansaré de ti.mp3" },
    { title: "Sabrás", artist: "Herencia de Timbiqui", color: "bg-gray-900", audio: "/audio/Sabrás.mp3" },
    { title: "Tengo ganas", artist: "Andrés Cepeda", color: "bg-slate-800", audio: "/audio/Tengo ganas.mp3" },
    { title: "2 Segundos", artist: "Kaleth Morales", color: "bg-zinc-800", audio: "/audio/2 Segundos.mp3" },
    { title: "Quiero casarme contigo", artist: "Herencia de Timbiqui", color: "bg-zinc-800", audio: "/audio/Casarme.mp3" }
  ];

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(records[selectedRecord].audio);
    } else {
      audioRef.current.src = records[selectedRecord].audio;
    }
  
    if (isPlaying) {
      audioRef.current.play();
    }
  
    return () => {
      audioRef.current.pause();
    };
  }, [selectedRecord]);
  

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRecordSelect = (index: number) => {
    setSelectedRecord(index);
    setIsPlaying(true);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-20 w-32 h-32 bg-rose-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-100 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4 mt-12">
        <h1 className="text-5xl md:text-7xl font-light mb-16 text-gray-800 relative tracking-wide">
          <span className="font-serif italic">
            Jojo's Paradise
          </span>
        </h1>

        <div className="relative mb-12">
          <div className="w-72 h-4 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full shadow-lg mb-2"></div>
          <div className="w-64 h-64 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full shadow-xl"></div>
            <div className="absolute inset-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full"></div>
            
            <div 
              className={`absolute inset-6 ${records[selectedRecord].color} rounded-full shadow-lg transition-all duration-300 ${
                isPlaying ? 'animate-spin' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
              
              <div className={`absolute inset-0 rounded-full overflow-hidden ${isPlaying ? 'animate-spin' : ''}`}>
                <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 opacity-40"></div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gray-300 rounded-full"></div>
              
              <div className="absolute inset-3 border border-black/10 rounded-full"></div>
              <div className="absolute inset-6 border border-black/10 rounded-full"></div>
              <div className="absolute inset-9 border border-black/10 rounded-full"></div>
            </div>

            <div className="absolute top-6 right-3 w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full origin-right transform -rotate-12 shadow-sm">
              <div className="absolute -right-1 -top-1 w-3 h-3 bg-gray-500 rounded-full"></div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 mt-8">
            <button
              onClick={handlePlayPause}
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white shadow-md hover:bg-gray-700 transform hover:scale-105 transition-all duration-200"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <button
              onClick={() => setIsPlaying(false)}
              className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white shadow-md hover:bg-gray-500 transform hover:scale-105 transition-all duration-200"
            >
              <RotateCcw size={12} />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto mb-8">
          {records.map((record, index) => (
            <button
              key={index}
              onClick={() => handleRecordSelect(index)}
              className={`px-4 py-2 rounded-full text-sm font-light transition-all duration-200 ${
                selectedRecord === index
                  ? 'bg-gray-800 text-white shadow-md'
                  : 'bg-white/60 text-gray-600 hover:bg-white/80 hover:shadow-sm'
              }`}
            >
              {record.title}
            </button>
          ))}
        </div>

        {isPlaying && (
          <div className="text-center animate-fade-in">
            <div className="text-sm text-gray-500 mb-1">Reproduciendo</div>
            <div className="text-lg font-light text-gray-700">{records[selectedRecord].title}</div>
            <div className="text-sm text-gray-500">{records[selectedRecord].artist}</div>
          </div>
        )}

        {!isPlaying && (
          <div className="text-center animate-fade-in">
          <div className="text-sm text-gray-500 mb-1">En pausa</div>
          <div className="text-lg font-light text-gray-700">{records[selectedRecord].title}</div>
          <div className="text-sm text-gray-500">{records[selectedRecord].artist}</div>
        </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;