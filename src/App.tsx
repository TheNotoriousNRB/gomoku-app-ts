import React from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home/>
      </main>

      <Footer />
    </>
    
  );
}

export default App;
