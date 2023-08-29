const createPreferenceController = require('../../controllers/mercadoPagoControllers/createPreferenceController');


const createPreferenceHandler = async (req, res) => {
    try {
        const result = await createPreferenceController(req, res);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = createPreferenceHandler;