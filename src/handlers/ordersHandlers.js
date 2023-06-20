const { getAllOrders , getOrderById } = require('../controllers/ordersControllers.js');

const handlerGetAllOrders = async ( req , res ) => {
    try {
        const allOrders = await getAllOrders();
        if (allOrders.length < 1) throw Error('Orders not found');
        res.status(200).json(allOrders);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const handlerGetOrderById = async ( req, res ) => {
    const { orderID } = req.params;
    try {
        const orderFound = await getOrderById(orderID);
        if (orderFound === null) throw Error('Order not Found');
        res.status(200).json(orderFound);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

module.exports = {
    handlerGetAllOrders,
    handlerGetOrderById
}