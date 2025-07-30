import React from 'react';
import ProductGrid from '../../components/ProductGrid';

const BusinessCards = () => {
  const items = ['Standard Card', 'Premium Card', 'Folded Card'];
  return (
    <section>
      <h2>Business Cards</h2>
      <ProductGrid items={items} />
    </section>
  );
};

export default BusinessCards;
