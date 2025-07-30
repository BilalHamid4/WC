import React from 'react';
import ProductGrid from '../../components/ProductGrid';

const Flyers = () => {
  const items = ['A5 Flyer', 'A4 Flyer', 'DL Flyer'];
  return (
    <section>
      <h2>Flyers</h2>
      <ProductGrid items={items} />
    </section>
  );
};

export default Flyers;
