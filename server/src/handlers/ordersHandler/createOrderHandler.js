const createOrderController = require('../../controllers/ordersControllers/createOrderController.js');  

const createOrderHandler = async (req,res) =>{
    const  productsIds =req.body;
    const {userId} = req.params;
    try {
        const result = await createOrderController(userId,productsIds.productIds);
        res.status(200).json(result);    
    } 
    catch (error) {
        res.status(400).json({error:error.message});
        console.log(error.message);
    }
};

module.exports = createOrderHandler;