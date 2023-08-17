
const getAllProducts = (req, res) =>{
    return res.status(200).json({message:"hola estamos en productos"})
}

module.exports = {
    getAllProducts
}