const axios = require ('axios'); 
let getProducts1 = async (req, res) =>{
    let endpoint = 'https://64d54824b592423e46954f89.mockapi.io/products'
    try {
        let response = await axios.get(endpoint)
        let data = response.data;
        console.log(data)
        res.status(200).json(data)       
    } catch (error) {
        res.status(400).json(error)
    }
}