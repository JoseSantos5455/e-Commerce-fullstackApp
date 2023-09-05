const { Order, User, Product, orderDetail } = require('../../db.js');

const ordersFormatted = (order)=>{
    return ({
            id:order.id,
            user:order.User.dataValues.userFullName,
            orderDate:order.orderDate,
            status:order.status,
            total:order.total,
            deliveredDate:order.deliveredDate,
            orderDetails:order.orderDetails.map(orderDetail=>{
                        return({
                              productId:orderDetail.Product.id,
                              product:orderDetail.Product.name,
                              quantity:orderDetail.quantity,
                              subTotal:orderDetail.subTotal,
                              });
                        }),
          });
};

const getOrderByIdController = async (id) => {
  const order = await Order.findByPk(id, {
    include: [
      {model: User,
        attributes: [
          [User.sequelize.literal(`"User"."name" || ' ' || "User"."lastName"`), 'userFullName'],
        ],
      },
      {model: orderDetail,
        attributes: ['quantity', 'subTotal'],
        include: [
                  {model: Product,
                  attributes: ['id','name'],
                  },],
      },
    ],
  });

  return ordersFormatted(order); 
};

module.exports = getOrderByIdController;

