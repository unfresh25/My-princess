import React, { useState } from 'react';
import { X } from 'lucide-react';
import LoveEnvelope from './LoveEnvelope';

const LoveLetters = () => {
  const [hoveredEnvelope, setHoveredEnvelope] = useState(null);
  const [openDialog, setOpenDialog] = useState(null);

  const letters = [
    {
      id: 1,
      title: "Mi grandioso amor",
      content: "Desde que te conocí supe que descubrirte sería algo maravilloso. Tus risas, tus gestos, cada parte de ti me parecía tan hermosa que solo quería seguir viéndola una y otra vez. Quizás por eso nunca quería dejar de hablar contigo. Así que sigue riendo, sigue mirándome, quédate aquí, por favor."
    },
    {
      id: 2,
      title: "Mi eterno amor",
      content: "Eres mi amor eterno, sé que te amaré para siempre. Te amo con todo lo que soy, porque sé que mi existencia es para ti. Sé que, si algún día te vas, la vida seguirá... pero si estás conmigo, mi alma siempre te pertenecerá y te adorará."
    },
    {
      id: 3,
      title: "Mi canción",
      content: "Estás en cada canción, en cada melodía que escucho. Tu corazón late con tanto amor que, sin darme cuenta, se volvió mi canción favorita… quizá desde el momento en que mi corazón empezó a latir al ritmo del tuyo."
    },
    {
      id: 4,
      title: "Promesa eterna",
      content: "Prometo amarte para siempre, adorarte por la eternidad. Prometo que conmigo nunca conocerás el aburrimiento. Prometo que todo tiene sentido cuando estamos juntos, siempre. Sé mía, sé mía para siempre y nunca lo dudes."
    },
  ];

  return (
    <>
      <section className="py-24 px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6 tracking-wide">
            Todo mi amor es para ti
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            Estas cartas son un testimonio de todo lo que siento por ti
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {letters.map((letter) => (
            <LoveEnvelope
              key={letter.id}
              title={letter.title}
              content={letter.content}
              hovered={hoveredEnvelope === letter.id}
              setHovered={(v) => setHoveredEnvelope(v ? letter.id : null)}
              onClick={() => setOpenDialog(letter.id)}
            />
          ))}
        </div>
      </section>

      {openDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="text-xl font-light text-gray-800">
                {letters.find((l) => l.id === openDialog)?.title}
              </h3>
              <button
                onClick={() => setOpenDialog(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed text-base font-light">
                  {letters.find((l) => l.id === openDialog)?.content}
                </p>
                <div className="mt-8 text-right text-gray-500 font-light text-sm italic">
                  Siempre tuyo, Jorge ❤️
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoveLetters;