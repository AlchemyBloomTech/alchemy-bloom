import React, { useEffect, useState } from 'react';

type Reflection = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
};

const ReflectionGallery: React.FC = () => {
  const [reflections, setReflections] = useState<Reflection[]>([]);

  useEffect(() => {
    fetch('/api/reflections')
      .then(res => res.json())
      .then(data => setReflections(data))
      .catch(err => console.error('Failed to fetch reflections', err));
  }, []);

 return (
  <div className="w-full bg-white py-4">
        <div className="mx-auto w-full px-2 sm:px-4 md:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {reflections.map(reflection => (
            <div
              key={reflection.id}
              className="bg-gray-100 rounded-xl shadow-sm overflow-hidden flex flex-col"
            >
              <img
                src={reflection.imageUrl}
                alt={reflection.name}
                className="w-full max-h-96 object-contain transition-transform duration-300 hover:scale-105"
              />
              <div className="p-3 flex-grow flex flex-col">
                <h3 className="text-base font-semibold text-gray-800">{reflection.name}</h3>
                <p className="text-sm text-gray-700 mt-1 whitespace-pre-wrap">
                  {reflection.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default ReflectionGallery;