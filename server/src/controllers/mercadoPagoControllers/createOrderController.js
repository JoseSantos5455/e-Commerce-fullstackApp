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

        items: shoppingCar,
      
        back_urls: {
          
            success: 'http://localhost:3002/',
            failure: 'http://localhost:3002/',
            pending: "http://localhost:3002/",
        },

        auto_return: "approved",
    })

    // console.log(result.body.auto_return);
    return (result.body.init_point)
}

module.exports = createOrderController;