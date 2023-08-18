const getProductByNameHandler = async(req,res)=>{
    const { name }= req.query;
    try {
        const result = await getProductByNameController(name);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports={getProductByNameHandler}