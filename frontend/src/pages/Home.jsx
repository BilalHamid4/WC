import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';

const Home = () => {
  const featured = ['Flyers', 'Business Cards', 'Posters'];

  return (
    <section>
      <div className="hero">
        <h2>Print & Branding</h2>
        <p>Your one-stop shop for all printing needs</p>
        <Link to="/products/flyers">Get Started</Link>
      </div>
      <h3>Featured Products</h3>
      <ProductGrid items={featured} />
    </section>
  );
};

export default Home;
