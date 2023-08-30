const mercadopago = require('mercadopago');
const {ACCESS_TOKEN} = process.env

mercadopago.configure({
    sandbox: true,
    access_token: `${ACCESS_TOKEN}`
});   
const createPreferenceController = async (req, res) => {
    const { name, price, description } = req.body;


    const preference = {
        items: [
            {
                title: name,
                description: description,
                unit_price: parseFloat(price),
                quantity: 1,
            }
        ],
        back_urls: {
            success: 'http://localhost:3002/success', 
            failure: 'http://localhost:3002/failure', 
            pending: 'http://localhost:3002/pending'  
        },
        auto_return: "approved",
    };
    const response = await mercadopago.preferences.create(preference);
    res.json({
        id: response.body.id,
    });
}

module.exports = createPreferenceController;