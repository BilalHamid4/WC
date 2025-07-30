import React from 'react';
import ProductGrid from '../../components/ProductGrid';

const Posters = () => {
  const items = ['A2 Poster', 'A1 Poster', 'A0 Poster'];
  return (
    <section>
      <h2>Posters</h2>
      <ProductGrid items={items} />
    </section>
  );
};

export default Posters;
