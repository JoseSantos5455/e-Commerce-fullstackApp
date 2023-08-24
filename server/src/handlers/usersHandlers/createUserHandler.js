const  createUserController  = require("../../controllers/usersControllers/createUserController.js")

const createUserHandler = async(req,res)=>{
    const {name,lastName,country,email,password,profile,address}= req.body;

    try {
        const result = await createUserController(name,lastName,country,email,password,profile,address);
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = createUserHandler;