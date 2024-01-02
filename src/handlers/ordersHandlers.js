const { getAllOrdersController , getOrderByIdController, createOrderController } = require('../controllers/ordersControllers.js');

const handlerGetAllOrders = async ( req , res ) => {
    try {
        const allOrders = await getAllOrdersController();
        if (allOrders.length < 1) throw Error('Orders not found');
        res.status(200).json(allOrders);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const handlerGetOrderById = async ( req, res ) => {
    const { orderID } = req.params;
    try {
        const orderFound = await getOrderByIdController(orderID);
        if (orderFound === null) throw Error('Order not Found');
        res.status(200).json(orderFound);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const handlerCreateOrder = async (req, res) => {
    const { amount, shipping, totalAmount, comentary, orderStatus } = req.body;
    try {
        const order = await createOrderController(amount, shipping, totalAmount, comentary, orderStatus);
        if (order === null) throw Error("Can't create order");
        res.status(200).json(order);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

module.exports = {
    handlerGetAllOrders,
    handlerGetOrderById,
    handlerCreateOrder
}