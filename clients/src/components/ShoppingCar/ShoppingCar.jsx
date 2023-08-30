import { useDispatch } from 'react-redux'
import { createOrder } from '../../Redux/actions/actions'




export default function ShoppingCar (){
    const dispatch = useDispatch();
    const shoppingCar = [{
        title: "Laptop",
        unit_price: 300,
        current_id: "ARS",
        quantity: 6,
    },
        {
            title: "PC",
            unit_price: 60,
            current_id: "ARS",
            quantity: 1,
        }] 

    const handleBuy = async () => {
    
        dispatch(createOrder(shoppingCar))
    }

    return(
            // En este componente se renderiza el carrito de compras, en el cual tal vez se muestren los productos y un boton de comprar, dicho boton de comprar deberia redirigir a la pagina de mercadopago, donde se realizara la compra
        <div>
            
                <div className='card'>
                    {/* <img src={img} alt='Product Image' /> */}
                    <h3>Productos</h3>
                    <p className='price'>100 $</p>
                    <button onClick={handleBuy}>Buy</button>
                    
                </div>
        </div>

    )
}

