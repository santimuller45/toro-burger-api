const { getAllOrdersController , getOrderByIdController, putOrderByIdController, createOrderController } = require('../controllers/ordersControllers.js');

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

const handlerPutOrder = async (req, res) => {
    const { id, status } = req.body;
    try {
        const orderFound = await putOrderByIdController(id, status);
        if (orderFound === null) throw Error("Couldn't found order");
        res.status(200).json(orderFound);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const handlerCreateOrder = async (req, res) => {
    const { foodOrder, amount, shipping, totalAmount, comentary, orderStatus, paymenType , userEmail } = req.body;
    try {
        const order = await createOrderController(foodOrder, amount, shipping, totalAmount, comentary, orderStatus, paymenType, userEmail );
        if (order === null) throw Error("Can't create order");
        if (userEmail === null) throw Error('Login Before Order');
        res.status(200).json(order);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

module.exports = {
    handlerGetAllOrders,
    handlerGetOrderById,
    handlerPutOrder,
    handlerCreateOrder
}