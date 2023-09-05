const {Order} = require('../../db.js');

const cancelOrderController = async(id)=>{
    const orderToCancel = await Order.findByPk(id);
    if (!orderToCancel) throw new Error('Order not found');
    if (orderToCancel.status!=='confirmed') throw new Error(`Can't canceled a ${orderToCancel.status} order `);
    const [rowsUpdated,[orderCanceled]] = await Order.update({status:'canceled'},
            {where:{id:id},
            returning:true});
    return orderCanceled;
};

module.exports = cancelOrderController;