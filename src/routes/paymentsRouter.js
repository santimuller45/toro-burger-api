const { Router } = require("express");

const { getAllPaymentsHandler } = require('../handlers/paymentsHandlers.js');

const paymentsRouter = Router();

paymentsRouter.get('/', getAllPaymentsHandler);

module.exports = paymentsRouter;