import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../context/shopContext';

function Home() {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loadings....</div>;

  return (
    <div>
      {products.map((product) => (
        <h1 key={product.title}>{product.title}</h1>
      ))}
    </div>
  );
}

export default Home;
