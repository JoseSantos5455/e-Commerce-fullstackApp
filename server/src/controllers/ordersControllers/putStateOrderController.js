const {Order} = require ('../../db.js');

const putStateOrderController = async (id) => {
    const orderToUpdate = await Order.findByPk(id);
    if (!orderToUpdate)  throw new Error('Order not found');

    const [rowsUpdated,[orderUpdated]] = await Order.update({status:'delivered'},
            {where:{id:id},
            returning:true});
    return orderUpdated;        
};

module.exports = putStateOrderController;