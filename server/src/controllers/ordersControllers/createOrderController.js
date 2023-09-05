const { Order, Product, User } = require('../../db.js');
const transporter = require('../../utils/mailer.js');

const sendConfirmationByMail = async (email,name,orderId)=>{
    const info = await transporter.sendMail({
        from: 'dLujo <dlujoshopstotr@gmail.com>', // sender address
        to: email,
        subject: "Order confirmed ✔", 
        html: `<b>Hello dear ${name}, your purchase is confirmed, order number: ${orderId}</b>`, // html body
      });
    
    return info;  
};

const createOrderController = async (userId, productIds) => {
    const user = await User.findByPk(userId);
    if (!user) throw new Error('User not found');
  
    const newOrder = await Order.create({
                                    userId,
                                    orderDate:new Date().toISOString().split('T')[0]});

    for (const product of productIds) {
        const detail = await Product.findByPk(product.productId);
        if (detail.stock < product.quantity) throw new Error('Stock is less than your requirement');

        await newOrder.addProduct(detail, {
            through: {
                        quantity: product.quantity,
                        subTotal: detail.price * product.quantity,
                    },
        });
       
        await Product.decrement('stock', { by: product.quantity, where: { id: product.productId } });
    };

    const orderDetails = await newOrder.getProducts();
    const total = orderDetails.reduce((accumulator, product) => {
                    const subTotalValue = parseFloat(product.orderDetail.subTotal);
                    if (!isNaN(subTotalValue)) return accumulator + subTotalValue;
                    return accumulator;
                    }, 0);

    await newOrder.update({ total });
    sendConfirmationByMail(user.email, user.name,newOrder.id);                 
    return newOrder;
};

module.exports = createOrderController;
