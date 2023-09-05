import React from 'react';
import Rating from '@mui/material/Rating';

const ProductRating = ({ valoration }) => {
  return (
    <div>
      <Rating name="product-rating" value={valoration/20} readOnly precision={0.1}/>
    </div>
  );
};

export default ProductRating;