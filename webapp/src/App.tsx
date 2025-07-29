import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ReflectionsGallery from './components/ReflectionsGallery';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">
          <ReflectionsGallery />
        </main>
        <Footer />
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsChatbotOpen((prev) => !prev)}
        className="fixed bottom-4 right-4 z-50 bg-black text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-800 transition"
      >
        {isChatbotOpen ? 'Close Chat' : 'Chat'}
      </button>

      {/* Conditionally render chatbot */}
      {isChatbotOpen && (
        <div
          className="
            fixed
            right-4
            bottom-16
            z-50
            w-[90vw] max-w-md
            sm:w-80
            rounded-xl
            shadow-lg
            bg-white/60
            backdrop-blur-md
            overflow-hidden
            flex
            flex-col
            max-h-[80vh]
            sm:max-h-[600px]
          "
        >
          <Chatbot />
        </div>
      )}
    </>
  );
}

export default App;
