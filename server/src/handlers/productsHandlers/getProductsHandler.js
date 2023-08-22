const getAllProductsController = require ('../../controllers/productsControllers/getAllProductsController')
const getProductByNameController = require ('../../controllers/productsControllers/getProductByNameController')

const setPaginationData = (page,size) =>{
    const data = {page:0,
                  size:12};
    const pageAsNumber = Number.parseInt(page);
    const sizeAsNumber = Number.parseInt(size);
    if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0 ) 
        data.page = pageAsNumber;
    if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber <=12)
        data.size = sizeAsNumber;
    return data;
};

const getProductsHandler = async(req,res)=>{
    const { name , page, size}= req.query;
    const paginationData = setPaginationData(page,size);

    try {
        if(name){
            const result = await getProductByNameController(name,paginationData.page,paginationData.size);
            res.status(200).json(result)
        }
        else{
            const result = await getAllProductsController(paginationData.page,paginationData.size);
            res.status(200).json(result)
        }
    } catch (error) {

        res.status(400).json({error: error.message})
    }
}

module.exports =  getProductsHandler
