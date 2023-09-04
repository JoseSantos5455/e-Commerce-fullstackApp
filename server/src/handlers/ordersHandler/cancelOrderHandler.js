const cancelOrderController = require('../../controllers/ordersControllers/cancelOrderController.js');

const cancelOrderHandler = async (req,res)=>{
    const {id} = req.params;
    try {
        const result = await cancelOrderController(id);
        res.status(200).json(result);    
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }

};

module.exports = cancelOrderHandler;