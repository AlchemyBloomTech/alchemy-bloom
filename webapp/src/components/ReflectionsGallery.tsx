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
  <div className="px-4 md:px-12 py-6 bg-white">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {reflections.map(reflection => (
        <div
          key={reflection.id}
          className="bg-gray-100 rounded-2xl shadow-md overflow-hidden flex flex-col"
        >
          <div className="w-full h-64 overflow-hidden">
            <img
                src="http://localhost:8080/images/7ad93aeb-ae65-4382-be4a-3c12aa449f48_1000003694.jpg"
                alt={reflection.name}
                className="w-full h-full object-cover"
                />
                      </div>
                      <div className="p-4 flex-grow flex flex-col justify-between">
                                  <h3 className="text-lg font-semibold text-gray-900">{reflection.name}</h3>
                                  <p className="text-base text-gray-700 mt-2 whitespace-pre-wrap overflow-auto max-h-40">
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