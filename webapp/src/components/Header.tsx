import React from 'react';

const Header: React.FC = () => (
 <header className="bg-[#fdfcff] border-b border-gray-200 py-5 shadow-sm">
     <div className="max-w-6xl mx-auto px-4 text-center">
       <h1 className="text-4xl font-playfair italic text-gray-800">
         Alchemy inBloom
       </h1>
       <p className="text-sm text-gray-500 mt-1 font-light tracking-wide">
         A sacred space for reflection, healing, and transformation
       </p>
     </div>
   </header>
);

export default Header;