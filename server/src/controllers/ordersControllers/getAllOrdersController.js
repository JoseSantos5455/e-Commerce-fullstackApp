const { Order, User,Product } = require('../../db.js');

const getAllOrdersController = async (status) => {
  const whereConditions = {};
  if (status) whereConditions.status = status; 

  const orders = await Order.findAll({
     where: whereConditions,
     include: [
                {model: Product,
                attributes: ['name'],
                through: {attributes: ['ProductId']},
                },
            ],
    });
  return orders;
};

module.exports = getAllOrdersController;
