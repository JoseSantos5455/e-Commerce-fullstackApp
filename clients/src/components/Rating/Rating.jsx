import Rating from '@mui/material/Rating';

const ProductRating = ({ valoration }) => {
  return (
    <div>
      <Rating name="product-rating" value={valoration} readOnly precision={0.1}/>
    </div>
  );
};

export default ProductRating;