const deleteUserController = require('../../controllers/usersControllers/deleteUserController.js');

const deleteUserHandler = async (req,res)=>{
    const {id} = req.params;
    try {
        const result = await deleteUserController(id);
        res.status(200).json(result);    
    } 
    catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = deleteUserHandler;