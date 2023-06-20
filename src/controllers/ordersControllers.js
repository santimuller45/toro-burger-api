const { Orders } = require('../db.js');

const getAllOrders = async () => {
    return await Orders.findAll();
};

const getOrderById = async (id) => {
    return await Orders.findByPk(id);
};

module.exports = {
    getAllOrders,
    getOrderById
}