import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddReview = ({ onReviewSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // Valida que el usuario haya ingresado una calificación y un comentario
    if (rating === 0 || comment.trim() === '') {
      alert('Por favor, ingrese una calificación y un comentario.');
      return;
    }

    // Envía la calificación y el comentario al padre a través de una función de devolución de llamada
    onReviewSubmit({ rating, comment });

    // Limpia el formulario después de enviar
    setRating(0);
    setComment('');
  };

  return (
    <div>
      <h3>Calificar el Producto</h3>
      <Rating
        name="user-rating"
        value={rating}
        onChange={handleRatingChange}
      />
      <TextField
        label="Comentario"
        multiline
        rows={4}
        variant="outlined"
        value={comment}
        onChange={handleCommentChange}
        fullWidth
        required
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Enviar Reseña
      </Button>
    </div>
  );
};

export default AddReview;