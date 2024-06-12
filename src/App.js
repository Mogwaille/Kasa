// Import de divers composants
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Permet la navigation
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import D_aPropos from './pages/D_aPropos';
import D_404 from './pages/D_404';


// Création de la fonction App
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aPropos" element={<D_aPropos />} />
          <Route path="*" element={<D_404 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;