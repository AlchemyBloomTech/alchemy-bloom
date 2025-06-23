import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ReflectionsGallery from './components/ReflectionsGallery';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
          <ReflectionsGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
