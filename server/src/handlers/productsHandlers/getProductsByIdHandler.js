const { getProductById } = require("../../controllers/productsControllers/getProductsByIdController");

const getProductsHandler = async (req, res) => {
    const { id } = req.params;

    const source = isNaN(id) ? "bdd" : "api";
    try {
      const product = await getProductById(id, source);
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  module.exports ={ getProductsHandler}