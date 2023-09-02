const getUserByIdController = require('../../controllers/usersControllers/getUserByIdController.js');

const getUserByIdHandler = async(req,res)=>{
    const {id} = req.params;
    try {
        const result = await getUserByIdController(id);
        res.status(200).json(result);     
    } 
    catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = getUserByIdHandler;