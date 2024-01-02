const { Router } = require('express');

const { handlerGetAllOrders, handlerGetOrderById, handlerCreateOrder } = require('../handlers/ordersHandlers.js');

const ordersRouter = Router();

ordersRouter.get("/", handlerGetAllOrders);
ordersRouter.get('/:orderID', handlerGetOrderById);
ordersRouter.post('/', handlerCreateOrder);

module.exports = ordersRouter;