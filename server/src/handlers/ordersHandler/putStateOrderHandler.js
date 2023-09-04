const putStateOrderController = require('../../controllers/ordersControllers/putStateOrderController.js');

const putStateOrderHandler = async (req,res)=>{
    const {id} = req.params;
    try {
        const result = await putStateOrderController(id);
        res.status(200).json(result);    
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }

};

module.exports = putStateOrderHandler;