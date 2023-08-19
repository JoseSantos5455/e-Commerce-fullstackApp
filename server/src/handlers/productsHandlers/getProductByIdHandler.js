const getProductByIdController = require("../../controllers/productsControllers/getProductsByIdController");

const getProductByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
      const product = await getProductByIdController(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  module.exports = getProductByIdHandler