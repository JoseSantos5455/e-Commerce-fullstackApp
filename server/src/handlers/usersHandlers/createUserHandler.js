const  createUserController  = require("../../controllers/usersControllers/createUserController.js")

const createUserHandler = async(req,res)=>{
    const {name, email}= req.body;

    try {
        const result = await createUserController(name, email);
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = createUserHandler;
