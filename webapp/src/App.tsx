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

      <div className="fixed top-20 right-4 z-50">
        <Chatbot />
      </div>
    </>
  );
}

export default App;
