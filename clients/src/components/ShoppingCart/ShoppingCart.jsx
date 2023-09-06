import styles from "./ShoppingCart.module.css";
import { useDispatch } from "react-redux";
import { createOrder, removeFromCart } from "../../Redux/actions/actions";
import { useSelector } from "react-redux";
import { FaDeleteLeft } from "react-icons/fa6";

export default function ShoppingCar() {
  const dispatch = useDispatch();

  const shoppingCart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  // Agrupa los productos por id y suma las cantidades
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
    if (user.id && shoppingCart2.length > 0) {
      dispatch(createOrder(shoppingCart2));
    }else{
      alert('You must be logged in to make a purchase')
    }
    // dispatch(createOrder(shoppingCart2));
    // dispatch(createOrder(shoppingCart));
  };

  const removeItem = (event) => {
    dispatch(removeFromCart(event.target.name));
  }

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
          <button onClick={removeItem} name={item.id}className={styles.btn_delete}>
            <FaDeleteLeft className={styles.btn}/>
          </button>
          </div>
        </div>
      ))}

      <div className={styles.buy_container}>
        <button onClick={handleBuy} className={styles.buy_btn}>Buy</button>
      </div>
    </div>
  );
}
