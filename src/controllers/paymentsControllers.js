const { Payments } = require('../db.js');

const getAllPayments = async () => {
    return await Payments.findAll();
};

module.exports = getAllPayments;