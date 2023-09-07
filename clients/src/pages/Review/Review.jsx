import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
//import { submitProductReview } from './redux/actions'; // Reemplaza con tu acción Redux
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getDetail } from '../../Redux/actions/actions';
import { getOrders, sellOrder } from '../../Redux/actions/actions';


function ProductReviewForm() {
  const dispatch = useDispatch();
  const userRedux = useSelector((state) => state.user);
  let userId = userRedux.id;
  useEffect(() => {
    
    dispatch(getOrders(userRedux.id));
    
  }, []);
  
  const ordersRedux = useSelector((state) => state.ordersRedux);
  let orderId = ordersRedux.id;
  let productId = ordersRedux.orderDetails;

  const [rating, setRating] = useState(0); // Estado para la calificación
  const [comment, setComment] = useState(''); // Estado para el comentario

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
     console.log(userId, orderId, productId)
    // Valida que se haya seleccionado una calificación antes de enviar
    // if (rating === 0) {
    //   alert('Por favor, selecciona una calificación.');
    //   return;
    // }

    // // Construye el objeto de revisión
    // const reviewData = {
      
    //   rating: rating,
    //   comment: comment,
    // };

    // // Envía los datos al backend a través de la acción Redux
    // dispatch(submitProductReview(reviewData));

    // // Limpia el formulario después del envío
    // setRating(0);
    // setComment('');
  };
useEffect(()=>{
    getDetail()
    
},[])
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
      <Button variant="contained" color="primary" 
      onClick={()=>handleSubmit()}>
        Enviar reseña
      </Button>
    </div>
  );
}

export default ProductReviewForm;