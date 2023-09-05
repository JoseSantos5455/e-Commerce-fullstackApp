const {Router} = require('express');
const getAllOrdersHandler = require('../handlers/ordersHandler/getAllOrdersHandler.js');
const getOrderByIdHandler = require('../handlers/ordersHandler/getOrderByIdHandler.js');
const createOrderHandler = require('../handlers/ordersHandler/createOrderHandler.js');
const putStateOrderHandler = require('../handlers/ordersHandler/putStateOrderHandler.js');
const cancelOrderHandler = require('../handlers/ordersHandler/cancelOrderHandler.js');

const ordersRouter = Router();

ordersRouter.get('/',getAllOrdersHandler); 
ordersRouter.get('/:id',getOrderByIdHandler); 
ordersRouter.post('/:userId',createOrderHandler);
ordersRouter.put('/:id',putStateOrderHandler);
ordersRouter.delete('/:id',cancelOrderHandler); 


module.exports = ordersRouter;