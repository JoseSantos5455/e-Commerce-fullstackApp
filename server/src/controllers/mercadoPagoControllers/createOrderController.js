const mercadopago = require('mercadopago');
require('dotenv').config();
const { TOKEN_MERCADO_PAGO } = process.env

const createOrderController = async (req, res) => {
    const shoppingCar = req.body;
    mercadopago.configure({
        access_token:
            `${TOKEN_MERCADO_PAGO}`
    });

    const result = await mercadopago.preferences.create({

        items: shoppingCar
        // {
        //     title: "Laptop",
        //     unit_price: 100,
        //     current_id: "ARS",
        //     quantity: 1,
        // }
        ,
        // estas rutas son las que se van a ejecutar cuando se realice la compra, si es exitosa, si falla o si esta pendiente, en este caso son rutas locales, pero deberian ser rutas de la app
        back_urls: {
            /*  success: async () => {
                // Abre la URL de éxito en una nueva pestaña del navegador
                await openUrlAndCallBackEnd('http://localhost:3002/', async () => {
                    // Llama a la ruta del backend para pasar  cosas del frontend
                    const response = await fetch('http://localhost:3002/orders');?
                    const data = await response.json();

                    ...
                });
            }, */
            success: 'http://localhost:3002/',
            failure: 'http://localhost:3002/',
            pending: "",
        }
    })



    return (result.body.init_point)
}

module.exports = createOrderController;