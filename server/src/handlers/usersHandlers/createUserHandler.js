const  createUserController  = require("../../controllers/usersControllers/createUserController.js")

const createUserHandler = async(req,res)=>{
    const {name,
         email,
         country,
          adress_st,
           adress_num,
            department,
             zip}= req.body;

    try {
        const result = await createUserController(name,
             email,
             country,
              adress_st,
               adress_num,
                department,
                zip);
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = createUserHandler;
