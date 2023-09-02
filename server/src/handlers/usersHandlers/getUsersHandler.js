const getUsersController = require('../../controllers/usersControllers/getUsersController.js');

const getUsersHandler = async (req,res) => {
    try {
        const result = await getUsersController();
        res.status(200).json(result);    
    } 
    catch (error) {
        res.status(400).json({error: error.message});        
    }
};

module.exports = getUsersHandler;