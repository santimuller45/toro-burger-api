const { Orders } = require('../db.js');

const getAllOrdersController = async () => {
    return await Orders.findAll();
};

const getOrderByIdController = async ( id ) => {
    return await Orders.findByPk(id);
};

const createOrderController = async ( foodOrder, amount, shipping, totalAmount, comentary, orderStatus, paymenType ) => {
    const newOrder = await Orders.create({ foodOrder, amount, shipping, totalAmount, comentary, orderStatus, paymenType });
    return newOrder;
}

module.exports = {
    getAllOrdersController,
    getOrderByIdController,
    createOrderController
}