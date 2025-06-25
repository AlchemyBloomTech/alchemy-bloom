import React from 'react';

const Header: React.FC = () => (
  <header className="bg-purple-50 text-gray-700 from-purple-100 via-purple-50 to-purple-100 text-gray-700 p-6 shadow-sm">
     <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center">
       <h1 className="text-4xl font-serif font-semibold tracking-wide leading-tight mb-1 text-center">
         Alchemy inBloom
       </h1>
       <p className="text-md text-gray-600 font-light italic max-w-md text-center">
         Inspired by the beauty and mystery of the Catholic Church.
         A sacred space for reflection, healing, and transformation
       </p>
     </div>
   </header>
);

export default Header;