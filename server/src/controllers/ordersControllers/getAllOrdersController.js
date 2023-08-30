const {Order} = require('../../db.js');

const getAllOrdersController = async (state)=>{
    const whereConditions ={};
    if (state)
        whereConditions.state = state;
    const orders = Order.findAll({
        where: whereConditions,
        include:[
            {   model:User,
                attributes:['name','lastname']
            },
        ],
    });
    return orders;
};

module.exports = getAllOrdersController;