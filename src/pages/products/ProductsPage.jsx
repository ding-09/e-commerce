import React from 'react';
import { useParams } from 'react-router-dom';

const ProductsPage = () => {
  const { category } = useParams();
  return <div>We are the {category}'s product page</div>;
};

export default ProductsPage;
