const getAllProductsController = require ('../../controllers/productsControllers/getAllProductsController');
const getProductsByNameController = require ('../../controllers/productsControllers/getProductsByNameController');

const setPaginationData = (page,size) =>{
    const data = {page:page,
                  size:size};
    const pageAsNumber = Number.parseInt(page);
    const sizeAsNumber = Number.parseInt(size);
    if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0 ) 
        data.page = pageAsNumber;
    if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber <=12)
        data.size = sizeAsNumber;
    return data;
};

const getProductsHandler = async(req,res)=>{
    const { name , page, size,categoryFilter,brandFilter,orderBy,direction}= req.query;
    const paginationData = setPaginationData(page,size);

    try {
        if(name){
            const result =  await getProductsByNameController(name,paginationData.page,paginationData.size,categoryFilter,brandFilter,orderBy,direction);
            res.status(200).json(result)
        }
        else{
            const result =  await getAllProductsController(paginationData.page,paginationData.size,categoryFilter,brandFilter,orderBy,direction);
            res.status(200).json(result)
        }
    } catch (error) {

        res.status(400).json({error: error.message})
    }
}

module.exports =  getProductsHandler;
