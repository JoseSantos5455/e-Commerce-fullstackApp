const  createUserController  = require("../../controllers/usersControllers/createUserController.js")

const createUserHandler = async(req,res)=>{
    const {name}= req.body;

    try {
        const result = await createUserController(name);
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = createUserHandler;
// ,lastName,country,email,password,profile,address
// ,lastName,country,email,password,profile,address