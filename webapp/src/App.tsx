import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ReflectionsGallery from './components/ReflectionsGallery';
<<<<<<< HEAD
=======
import Chatbot from './components/Chatbot'; // 🧠 Add this line
>>>>>>> origin/main
import logo from './logo.svg';
import './App.css';

function App() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
          <main className="flex-grow">
              <ReflectionsGallery />
          </main>
      <Footer />
    </div>
=======
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
>>>>>>> origin/main
  );
}

export default App;
