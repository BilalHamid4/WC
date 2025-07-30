import React from 'react';
import styles from './ProductGrid.module.css';

const ProductGrid = ({ items }) => {
  return (
    <div className={styles.grid}>
      {items.map((item, index) => (
        <div key={index} className={styles.card}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
