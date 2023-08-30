const { Router } = require('express');
const createOrderHandler = require('../handlers/mercadoPagoHandlers/createOrderHandler');

const mercadoPagoRouter = Router();

mercadoPagoRouter.post('/create-order', createOrderHandler)
// mercadoPagoRouter.get('/success', (req, res) => res.send('succes'))
// mercadoPagoRouter.get('/failure', (req, res) => res.send('failure'))
// mercadoPagoRouter.get('/pending', (req, res) => res.send('pending'))
// mercadoPagoRouter.get('/webhook', (req, res) => res.send('web'))
// mercadoPagoRouter.post('/', (req, res) => res.send('hola'))



module.exports = mercadoPagoRouter;