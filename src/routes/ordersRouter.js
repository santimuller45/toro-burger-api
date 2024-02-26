const { Router } = require('express');

const { handlerGetAllOrders, handlerGetOrderById, handlerPutOrder, handlerCreateOrder } = require('../handlers/ordersHandlers.js');

const ordersRouter = Router();

ordersRouter.get("/", handlerGetAllOrders);
ordersRouter.get('/:orderID', handlerGetOrderById);
ordersRouter.post('/', handlerCreateOrder);
ordersRouter.put('/', handlerPutOrder);

module.exports = ordersRouter;