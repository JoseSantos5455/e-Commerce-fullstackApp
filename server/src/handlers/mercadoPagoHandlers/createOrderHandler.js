const createOrderController = require('../../controllers/mercadoPagoControllers/createOrderController');


const createOrderHandler = async (req, res) => {
    try {
        const result = await createOrderController(req, res);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = createOrderHandler;