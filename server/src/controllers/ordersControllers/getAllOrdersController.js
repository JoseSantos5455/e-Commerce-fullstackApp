const { Order, User, Product, orderDetail } = require('../../db.js');

const ordersFormatted = (orders)=>{
  const ordersWithFormat = orders.map((order)=>{
    return ({
            id:order.id,
            user:order.User.dataValues.userFullName,
            orderDate:order.orderDate,
            status:order.status,
            total:order.total,
            deliveredDate:order.deliveredDate,
            orderDetails:order.orderDetails.map(orderDetail=>{
                        return({
                              product:orderDetail.Product.name,
                              quantity:orderDetail.quantity,
                              subTotal:orderDetail.subTotal,
                              });
                        }),
          });});
  return ordersWithFormat;        
};

const getAllOrdersController = async (status,userId,page,size) => {
  const whereConditions = {};
  if (['confirmed','delivered','canceled'].includes(status)) whereConditions.status = status;
  if (userId) whereConditions.userId = userId;
  const orderList = await Order.findAndCountAll({
    limit:size,
    offset:page * size,
    where: whereConditions,
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
                  attributes: ['name'],
                  },],
      },
    ],
  });

  return ordersFormatted(orderList.rows); 
};

module.exports = getAllOrdersController;

