const getAllOrdersController = require('../../controllers/ordersControllers/getAllOrdersController.js');

const setPaginationData = (page,size) =>{
    const data = {page:page,
                  size:size};
    const pageAsNumber = Number.parseInt(page);
    const sizeAsNumber = Number.parseInt(size);
    if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0 ) 
        data.page = pageAsNumber;
    else data.page = 0;
    if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber <=12)
        data.size = sizeAsNumber;
    else data.size = 12;
    return data;
};

const getAllOrdersHandler = async(req,res)=>{
    const {status,userId,page,size} = req.query;
    const paginationData = setPaginationData(page,size);
    try {
        const result = await getAllOrdersController(status,userId,paginationData.page,paginationData.size);
        res.status(200).json(result);
    } 
    catch (error) {
        res.status(400).json({error: error.message});       
    }
};

module.exports = getAllOrdersHandler;