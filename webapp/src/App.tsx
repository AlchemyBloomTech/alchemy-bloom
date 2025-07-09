import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ReflectionsGallery from './components/ReflectionsGallery';
import Chatbot from './components/Chatbot'; // 🧠 Add this line
import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div className="min-h-screen flex flex-col bg-white">
     <Header />
     <div className="fixed top-20 right-4 z-50">
       <Chatbot />
     </div>

     <main className="flex-grow">
       <ReflectionsGallery />
     </main>

     <Footer />
   </div>
  );
}

export default App;
