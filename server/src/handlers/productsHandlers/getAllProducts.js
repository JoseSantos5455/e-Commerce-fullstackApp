const url = 'http://localhost:5000/products'
const { Product } = require('../db')
const axios = require('axios')
const getAllProductsApi = async (req, res) =>{
    
    try {
        const response = await axios.get(url)
        const data = response.data;

        const product = data.map((product)=> (
            {
                         name: product.name,
                         price: product.price,
                         description: product.description,
                         image: product.image,
                         category: product.category,
                         valoration: product.valoration,
                         stock:product.stock
                       }
     
        )
        );

        let products = await Product.bulkCreate(product)
        res.status(200).json(products)

    } catch (error) {
        
    }
}

module.exports = {
    getAllProductsApi
}