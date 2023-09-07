import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';

// Componente para calificar y comentar un producto
function Review() {
  const { productId } = useParams(); // ID del producto desde la URL
  const user = useSelector(state => state.user); // Información del usuario autenticado
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  // Simulación: verifica si el usuario ha completado una compra válida
  useEffect(() => {
    // Aquí debes realizar la verificación en tu base de datos o sistema de compras
    // Puedes utilizar la información de user y productId para verificar la compra.
    // Si la compra está completa, establece setPurchaseCompleted(true);
  }, [user, productId]);

  // Si el usuario no está autenticado o la compra no está completa, redirige
  if (!user || !purchaseCompleted) {
    return <NavLink to={`*`}></NavLink>; // Redirige a una página de error o "no tienes acceso"
    
  }

  // Aquí puedes mostrar el formulario para calificar y comentar el producto
  return (
    <div>
      <h1>Califica y comenta el producto</h1>
      <p>Nombre del producto: {productId}</p>
      {/* Tu formulario para calificar y comentar el producto */}
      {/* Asegúrate de manejar el envío del formulario y registrar la calificación y el comentario en tu base de datos */}
    </div>
  );
}

export default Review;