const {Router} = require('express');
const getAllOrdersHandler = require('../handlers/ordersHandler/getAllOrdersHandler.js');
const getOrderByIdHandler = require('../handlers/ordersHandler/getAllOrdersHandler.js');
const getOrdersByUserHandler = require('../handlers/ordersHandler/getOrdersByUserHandler.js');
const createOrderHandler = require('../handlers/ordersHandler/createOrderHandler.js');
const putStateOrderHandler = require('../handlers/ordersHandler/putStateOrderHandler.js');
const deleteOrderHandler = require('../handlers/ordersHandler/deleteOrderHandler.js');

const ordersRouter = Router();

ordersRouter.get('/',getAllOrdersHandler); 
ordersRouter.get('/:id',getOrderByIdHandler); 
// ordersRouter.get('/:userId',getOrdersByUserHandler); 
ordersRouter.post('/:userId',createOrderHandler);
// ordersRouter.put('/:id',putStateOrderHandler);
// ordersRouter.delete('/:id',deleteOrderHandler); 


module.exports = ordersRouter;