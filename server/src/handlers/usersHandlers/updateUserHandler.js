const updateUserController = require('../../controllers/usersControllers/updateUserController.js');

const updateUserHandler = async (req,res)=>{
    const {id} = req.params;
    const {name,lastName,country,email,password,profile,address} = req.body;
    try {
        const result = await updateUserController(id,name,lastName,country,email,password,profile,address);
        res.status(200).json(result);    
    } 
    catch (error) {
        res.status({ error: error.message});
    }
};

module.exports = updateUserHandler;