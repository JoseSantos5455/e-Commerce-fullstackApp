const mercadopago = require('mercadopago');

const createPreferenceController = async (req, res) => {
    let preference = {
        items: [
            {
                // title: req.body.title,
                title: req.body.description,
                unit_price: Number(req.body.price),
                quantity: Number(req.body.quantity),
            }
        ],
        back_urls: {
            success: 'http://localhost:3002',
            failure: 'http://localhost:3002',
            pending: "",
        },
        auto_return: "approved",
    };

    mercadopago.preferences
        .create(preference)
        .then(function (response) {
            res.json({
                id: response.body.id,
            });
        })
        .catch(function (error) {
            console.log(error);
        });
};


module.exports = createPreferenceController;