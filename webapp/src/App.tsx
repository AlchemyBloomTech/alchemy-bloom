import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ReflectionsGallery from './components/ReflectionsGallery';
import Chatbot from './components/Chatbot'; // 🧠 Add this line
import './App.css';

function App() {
  return (
      <>
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <main className="flex-grow">
            <ReflectionsGallery />
          </main>
          <Footer />
        </div>

        <div
          className="
            fixed
            right-4
            top-20
            bottom-4
            z-50
            w-[90vw] max-w-md
            sm:w-80
            rounded-xl
            shadow-lg
            bg-white/45
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
      </>
    );
}

export default App;
