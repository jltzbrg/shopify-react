import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { handle } = useParams();
  const { fetchProductWithHandle, product } = useContext(ShopContext);

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
}

export default ProductPage;
