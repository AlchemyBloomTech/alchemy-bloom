import React from 'react';
import ReflectionsGallery from './components/ReflectionsGallery';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
//     <div className="App">
//         <header className="App-header" style={{ fontSize: '0.8rem', padding: '10px' }}>
//                 <p>Welcome to inBloom</p>
//                 <img src={logo} className="App-logo" alt="logo" />
//     </header>
//       <main className="App-main">
<div className="min-h-screen bg-white p-6 md:p-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Reflections</h1>
      <ReflectionsGallery />

    </div>
  );
}

export default App;
