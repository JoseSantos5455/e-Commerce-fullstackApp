const {Order} = require ('../../db.js');

const putStateOrderController = async (id) => {
    const orderToUpdate = await Order.findByPk(id);
    if (!orderToUpdate)  throw new Error('Order not found');
    if (orderToUpdate.status!=='confirmed') throw new Error(`Couldn't pass from ${orderToUpdate.status} order to delivered order`);

    const [rowsUpdated,[orderUpdated]] = await Order.update({status:'delivered'},
            {where:{id:id},
            returning:true});
    return orderUpdated;        
};

module.exports = putStateOrderController;