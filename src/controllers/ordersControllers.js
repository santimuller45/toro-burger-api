const { Orders } = require('../db.js');

const getAllOrdersController = async () => {
    return await Orders.findAll();
};

const getOrderByIdController = async ( id ) => {
    return await Orders.findByPk(id);
};

const createOrderController = async ( amount, shipping, totalAmount, comentary, orderStatus ) => {
    const newOrder = await Orders.create({ amount, shipping, totalAmount, comentary, orderStatus });
    return newOrder;
}

module.exports = {
    getAllOrdersController,
    getOrderByIdController,
    createOrderController
}