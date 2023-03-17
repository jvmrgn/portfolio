import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import PrimeirasPalavras from './components/primeirasPalavras';
import HardSkills from './components/HardSkills';
import Projetos from './components/projetos';
import Footer from './components/footer';


function App() {
  return (
    <div>
      
      <header>
      <Header />
      </header>

      <main>
      <PrimeirasPalavras />
          <HardSkills />
          <Projetos />
      </main>

          <footer>
          <Footer />
          </footer>

    </div>
  );
}

export default App;
