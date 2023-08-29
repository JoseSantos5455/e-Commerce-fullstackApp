const { Router } = require('express');
const mercadopago = require('mercadopago');
const createPreferenceHandler = require('../handlers/mercadoPagoHandlers/createPreferenceHandler');

const mercadoPagoRouter = Router();


mercadoPagoRouter.post('/', createPreferenceHandler)



module.exports = mercadoPagoRouter;