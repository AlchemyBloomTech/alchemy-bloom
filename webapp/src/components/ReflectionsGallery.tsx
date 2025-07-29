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
       <div className="mx-auto w-full px-2 sm:px-4 md:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         {reflections.map(reflection => (
           <div
               key={reflection.id}
               className="bg-gray-100 rounded-xl shadow-sm overflow-visible relative flex flex-col group"
           >
           <div className="relative overflow-visible">
             <img
               src={reflection.imageUrl}
               alt={reflection.name}
               className="w-full max-h-[400px] object-contain transition duration-500 ease-in-out transform group-hover:scale-[1.7] group-hover:z-50 group-hover:shadow-2xl"
             />
           </div>
             <div className="p-4 flex-grow flex flex-col">
               <h3 className="text-base font-semibold text-gray-800">{reflection.name}</h3>
               <p className="text-sm text-gray-700 mt-1 whitespace-pre-wrap flex-grow overflow-auto max-h-40">
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