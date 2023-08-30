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
        back_urls: {
            success: 'http://localhost:3002/success',
            failure: 'http://localhost:3002/failure',
            pending: "http://localhost:3002/pending",
        }
    })



    return (result.body.init_point)
}

module.exports = createOrderController;