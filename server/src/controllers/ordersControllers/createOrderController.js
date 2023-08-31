const {Order,Product,User} = require('../../db.js');

const createOrderController = async(userId,productId,quantity) =>{
    const user = await User.findByPk(userId);
    if(!user) throw new Error('User not found');
    const product = await Product.findByPk(productId);
    if(!product) throw new Error('Product not found');
    if (product.stock<quantity) throw new Error('Stock is less than your requirement');
    const total = product.price * quantity;
    const orderDate = new Date().toISOString().split('T')[0];

    const newOrder = await Order.create({
        quantity: quantity,
        total: total,
        orderDate: orderDate,
        userId:userId,
        productId:productId,
    });

    await Product.decrement('stock', { by: quantity, where: { id: productId } });

    return newOrder;
};

module.exports = createOrderController;