import React, { useState, useEffect } from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useSelector, useDispatch } from 'react-redux'
import { mercadoPago } from '../../Redux/actions/actions';
const MercadoPago = () => {
    const [preferenceId, setPreferenceId] = useState(null);
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        initMercadoPago('TEST-19d91d63-ca96-4904-af64-d3d7ca01c669');
    }, []);

    const handleMercadoPago = async () => {
        try {
            const response = await dispatch(mercadoPago(products));
            setPreferenceId(response.data.id); 
        } catch (error) {
            console.error('Error al realizar el pago:', error);
        }
    };

    return (
        <div>
            <h2>{products.name}</h2>
            <p>{products.description}</p>
            <p>Precio: ${products.price}</p>
            <button onClick={handleMercadoPago}>Realizar Pago</button>
            {preferenceId && <p>ID de Preferencia: {preferenceId}</p>}
        </div>
    );
};

export default MercadoPago