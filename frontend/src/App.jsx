import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Flyers from './pages/products/Flyers';
import BusinessCards from './pages/products/BusinessCards';
import Posters from './pages/products/Posters';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/flyers" element={<Flyers />} />
        <Route path="/products/business-cards" element={<BusinessCards />} />
        <Route path="/products/posters" element={<Posters />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
