const disableProductController = require("../controllers/productsControllers/disableProductController")

const disableProductHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await disableProductController(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = disableProductHandler