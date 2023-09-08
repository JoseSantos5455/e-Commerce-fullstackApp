import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
//import { submitProductReview } from './redux/actions'; // Reemplaza con tu acción Redux
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getDetail, postReview } from '../../Redux/actions/actions';
import { getOrders, sellOrder } from '../../Redux/actions/actions';


function ProductReviewForm({userId, orderId, productId}) {
  const dispatch = useDispatch();

  const [rating, setRating] = useState(1); // Estado para la calificación
  const [comment, setComment] = useState(''); // Estado para el comentario

  const handleRatingChange = (event) => {
    setRating(  Number(event.target.value));
  };
  
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  
  const handleSubmit = () => {
   dispatch(postReview(userId, orderId, productId, comment, rating))
  };

  return (
    <div>
      <h4>Deja tu reseña</h4>
      <Rating
        name="rating"
        value={rating}
        onChange={handleRatingChange}
        max={5}
      />
      <TextField
        label="Comentario"
        multiline
        rows={4}
        value={comment}
        onChange={handleCommentChange}
      />
      <Button variant="contained" color="primary" 
      onClick={()=>handleSubmit()}>
        Send
      </Button>
    </div>
  );
}

export default ProductReviewForm;