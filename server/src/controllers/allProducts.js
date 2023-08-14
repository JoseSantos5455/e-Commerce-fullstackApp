
const getAllProducts = (req, res) =>{
    return res.status(200).json({massage:"hola estamos en productos"})
}

module.exports = {
    getAllProducts
}