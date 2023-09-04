import { useDispatch } from 'react-redux'
import { createOrder } from '../../Redux/actions/actions'
import { useSelector } from 'react-redux'



export default function ShoppingCar() {
    const dispatch = useDispatch();

    const shoppingCart = useSelector((state) => state.cart)


    let shoppingCart2 = shoppingCart.map((item) => {
        return {
            title: item.name,
            unit_price: item.price,
            current_id: "ARS",
            quantity: item.buyQ,
        };
    });

    // const shoppingCart22 = [
    //     {
    //         current_id: "ARS",
    //         quantity: 1,
    //         unit_price: 100,
    //         title: "Laptop"
    //     },
    //     {
    //         current_id: "ARS",
    //         quantity: 1,
    //         unit_price: 200,
    //         title: "a"
    //     }
    // ]
  

    const handleBuy = async () => {
       
        
        dispatch(createOrder(shoppingCart2))
        // dispatch(createOrder(shoppingCart));
    }

    return (
        // En este componente se renderiza el carrito de compras, en el cual tal vez se muestren los productos y un boton de comprar, dicho boton de comprar deberia redirigir a la pagina de mercadopago, donde se realizara la compra
        <div>
            {
                shoppingCart.map((item) => {
                    return (
                        <div key={item.id}>

                            <h3>{item.name}</h3>
                            <h3>{item.price}</h3>
                            <h3>{item.buyQ}</h3>
                            <br />
                        </div>
                    )
                }
                )

            }

            <div className='card'>
                {/* <h3>Productos</h3> */}
                {/* <p className='price'>100 $</p> */}

                <button onClick={handleBuy}>Buy</button>

            </div>
        </div>

    )
}

