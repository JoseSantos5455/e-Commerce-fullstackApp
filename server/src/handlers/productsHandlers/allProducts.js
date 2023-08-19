const { getProductsByName } = require("../../controllers/productsControllers/getProductsByNameController");

const getAllProducts = async (req, res) =>{
    
    const { name } = req.name;

    try {
        let productsByName = await getProductsByName(name);
        
        if(productsByName.length <= 0) {
            res.status(404).send("No results");
        } else {
            res.status(200).json(productsByName);
        }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = {
    getAllProducts
}