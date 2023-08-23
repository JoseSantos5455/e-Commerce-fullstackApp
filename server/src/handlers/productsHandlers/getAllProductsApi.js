const url = 'http://localhost:5000/products'
const { Product } = require('../../db')
const axios = require('axios')
const getAllProductsApi = async (req, res) =>{
    
    try {
        const response = await axios.get(url)
        const data = response.data;

        const product = data.map((product)=> (
            {
                         name: product.name,
                         description: product.description,
                         price: Number(product.price),
                         stock:product.stock,
                         valoration: product.valoration,
                         image: product.image,
                         categoryId:Math.floor(Math.random() * 3) + 1
                       }
     
        )
        );
        let products = await Product.bulkCreate(product)
        res.status(200).json(products)

    } catch (error) {
        
    }
}

module.exports = getAllProductsApi;
