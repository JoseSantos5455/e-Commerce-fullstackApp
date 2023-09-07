import  { useState } from 'react';
import { useDispatch } from 'react-redux';
//import { submitProductReview } from './redux/actions'; // Reemplaza con tu acción Redux
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ProductReviewForm({ productId }) {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0); // Estado para la calificación
  const [comment, setComment] = useState(''); // Estado para el comentario

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // Valida que se haya seleccionado una calificación antes de enviar
    if (rating === 0) {
      alert('Por favor, selecciona una calificación.');
      return;
    }

    // Construye el objeto de revisión
    const reviewData = {
      productId: productId,
      rating: rating,
      comment: comment,
    };

    // Envía los datos al backend a través de la acción Redux
    dispatch(submitProductReview(reviewData));// eslint-disable-line no-undef

    // Limpia el formulario después del envío
    setRating(0);
    setComment('');
  };

  return (
    <div>
      <h2>Deja tu reseña</h2>
      <Rating
        name="rating"
        value={rating}
        onChange={handleRatingChange}
      />
      <TextField
        label="Comentario"
        multiline
        rows={4}
        value={comment}
        onChange={handleCommentChange}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Enviar reseña
      </Button>
    </div>
  );
}

export default ProductReviewForm;