const getAllOrdersController = require('../../controllers/ordersControllers/getAllOrdersController.js');

const getAllOrdersHandler = async(req,res)=>{
    const {status} = req.query;
    try {
        const result = await getAllOrdersController(status);
        res.status(200).json(result);
    } 
    catch (error) {
        res.status(400).json({error: error.message});       
    }
};

module.exports = getAllOrdersHandler;