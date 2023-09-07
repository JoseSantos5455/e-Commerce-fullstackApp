import styles from "./ShoppingCart.module.css";
import { useDispatch } from "react-redux";
import { createOrder, removeFromCart } from "../../Redux/actions/actions"; 
import { useSelector } from "react-redux";
import { FaDeleteLeft } from "react-icons/fa6";
import { useAuth0 } from '@auth0/auth0-react';
import LogInButton from "../Login/LogInButton";

export default function ShoppingCar() {
  const dispatch = useDispatch();

  const shoppingCart = useSelector((state) => state.cart);
  console.log(shoppingCart);
  
  const { isAuthenticated } = useAuth0(); 

  if (!isAuthenticated) {
    return (
      <div className={styles.container_shoppingCart}>
        <p className={styles.empty_cart_messageAuth}>
          Por favor, inicia sesión para ver tu carrito.
        </p>
        <LogInButton />
      </div>
    );
  }

  const groupedCart = shoppingCart.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { ...item, quantity: 0 };
    }
    acc[item.id].quantity += item.buyQ;
    return acc;
  }, {});

  const shoppingCart2 = Object.values(groupedCart).map((item) => ({
    title: item.name,
    unit_price: item.price,
    current_id: "ARS",
    quantity: item.quantity,
  }));

  const handleBuy = async () => {
    dispatch(createOrder(shoppingCart2));
    // dispatch(createOrder(shoppingCart));
  };

  const handleRemoveFromCart = (productId) => {
  dispatch(removeFromCart(productId));
  };

  const isCartEmpty = Object.values(groupedCart).length === 0;

  return (
    <div className={styles.container_shoppingCart}>
      {Object.values(groupedCart).map((item, index) => (
        <div key={item.id} className={styles.cart_products}>
          <h4>
            <b>Order #{index + 1}</b>{" "}
          </h4>
          <h6>
            <b>Product name: </b> {item.name}
          </h6>
          <h6>
            <b> Price: </b> {item.price}
          </h6>
          <div className={styles.container_quantity}> 

            <h6>
              <b>Quantity: </b>
              {item.quantity}
            </h6>
            <button
              className={styles.btn_delete}
              onClick={() => handleRemoveFromCart(item.id)}
                          >
              <FaDeleteLeft className={styles.btn}/>
            </button>
          </div>
        </div>
      ))}

      {}
      {isCartEmpty ? (
        <p className={styles.empty_cart_message}>El carrito está vacío</p>
      ) : (
        <div className={styles.buy_container}>
          <button onClick={handleBuy} className={styles.buy_btn}>Buy</button>
        </div>
      )}
    </div>
  );
}
