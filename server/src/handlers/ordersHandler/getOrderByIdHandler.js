const getOrderByIdController = require("../../controllers/ordersControllers/getOrderByIdController.js");

const getOrderByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
      const product = await getOrderByIdController(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  module.exports = getOrderByIdHandler;