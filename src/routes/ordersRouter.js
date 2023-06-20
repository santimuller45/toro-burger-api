const { Router } = require('express');

const { handlerGetAllOrders, handlerGetOrderById } = require('../handlers/ordersHandlers.js');

const ordersRouter = Router();

ordersRouter.get("/", handlerGetAllOrders);
ordersRouter.get('/:orderID', handlerGetOrderById);

module.exports = ordersRouter;