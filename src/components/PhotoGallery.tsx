import React, { useState, useEffect } from 'react';

const PhotoGallery = () => {
  const [visiblePhotos, setVisiblePhotos] = useState<number[]>([]);

  const photos = [
    {
      id: 1,
      url: "images/first-day.jpeg",
      text: "Nunca imaginé que todo pasaría tan rápido, que seríamos pareja y que encontraría tanta felicidad a tu lado. Desde ese día supe, sin dudarlo, que quería compartir cada momento de mi vida contigo."
    },
    {
      id: 2,
      url: "images/graduation.jpeg",
      text: "Tu sonrisa es lo más hermoso que existe; cuando la veo, siento que todo es posible. Soy el hombre más afortunado porque estás a mi lado y me amas. De verdad, podría irme de este mundo en cualquier momento y aun así me iría feliz, porque ya lo tengo todo contigo."
    },
    {
      id: 3,
      url: "images/kiss.jpeg",
      text: "Nuestro primer viaje juntos, totalmente desorganizado pero fue perfecto estando contigo. Desearía conocer nuevos lugares, descubrir todo lo maravilloso de este mundo, desearía descubrirte más."
    },
    {
      id: 4,
      url: "images/faces.jpeg",
      text: "No es que mi felicidad dependa de ti, es solo que es imposible no ser feliz contigo cerca. Quiero que esta felicidad dure para siempre, así que, por favor, quédate conmigo."
    },
    {
      id: 5,
      url: "images/smiling.jpeg",
      text: "Eres el amor de mi vida, eres todo lo que siempre busqué, eres lo que el mundo necesita, eres lo que mi mundo desea."
    },
    {
      id: 6,
      url: "images/princess.jpeg",
      text: "Siempre serás mi princesa hermosa, mi adoración, mi reina. Siempre serás mía, hoy y siempre."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const photoId = parseInt(entry.target.getAttribute('data-photo-id') || '0');
            setVisiblePhotos(prev =>
              prev.includes(photoId) ? prev : [...prev, photoId]
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    const photoElements = document.querySelectorAll('.photo-item');
    photoElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-4 max-w-5xl mx-auto relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6 tracking-wide">
          Nuestro viaje
        </h2>
        <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
          Deseo que cada momento que pase contigo sea eterno, que cada sonrisa que me brindes sea eterna, que cada momento que pasemos juntos sea eterno.
        </p>
      </div>

      <div className="space-y-24">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            data-photo-id={photo.id}
            className={`photo-item flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } transition-all duration-1000 transform ${visiblePhotos.includes(photo.id)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="flex-1">
              <div className="relative group">
                <div className="relative group">
                  <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={photo.url}
                      alt={`Memory ${photo.id}`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="relative max-w-md mx-auto md:mx-0">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light italic">
                  {photo.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;