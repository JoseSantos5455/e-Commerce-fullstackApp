import React, { useState } from 'react';
import ProductRating from './Rating'; // Importa el componente de mostrar rating
import AddReview from './AddReview'; // Importa el componente de agregar rating y comentario

const ProductPage = () => {
  const [productRating, setProductRating] = useState(4); // Ejemplo de rating del producto

  const handleReviewSubmit = (userReview) => {
    // Aquí puedes enviar la calificación y el comentario al backend para su procesamiento
    console.log('Nueva revisión:', userReview);

    // Actualiza el rating del producto con la nueva revisión si es necesario
    // setProductRating(...);
  };

  return (
    <div>
      <h1>Página del Producto</h1>
      <Rating rating={Rating} />
      {/* Renderiza el componente de mostrar rating */}
      <AddReview onReviewSubmit={handleReviewSubmit} />
      {/* Renderiza el componente de agregar rating y comentario */}
    </div>
  );
};

export default ProductPage;