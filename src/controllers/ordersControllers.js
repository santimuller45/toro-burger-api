const { Orders , Users } = require('../db.js');

const getAllOrdersController = async () => {
    const resultAllOrders = await Orders.findAll({ include:{ model: Users, attributes:["email","firstname","lastname"] }});
    const orderPending = [];
    const orderInProcess = [];
    const orderCompleted = [];
    for (let i= 0 ; i < resultAllOrders.length; i++) {
        if (resultAllOrders[i].orderStatus === 'PENDIENTE') {
            orderPending.push(resultAllOrders[i]);
        } else if (resultAllOrders[i].orderStatus === 'EN PROCESO') {
            orderInProcess.push(resultAllOrders[i]);
        } else if (resultAllOrders[i].orderStatus === 'COMPLETADO') {
            orderCompleted.push(resultAllOrders[i])
        }
    };
    return { orderPending, orderInProcess, orderCompleted };
};

const getOrderByIdController = async ( id ) => {
    return await Orders.findByPk(id, 
        { include: { 
            model: Users,
            attributes:["email","firstname","lastname"],
        }});
};

const putOrderByIdController = async ( id , status) => {
    const orderToModify = await Orders.findByPk(id,
        { include: {
            model: Users,
            attributes:["email","firstname","lastname"],
        }});
    if (orderToModify === null) throw Error("Couldn't find order");
    orderToModify.orderStatus = status;
    await orderToModify.save();
    return orderToModify;
};

const createOrderController = async ( foodOrder, amount, shipping, totalAmount, comentary, orderStatus, paymenType, userEmail ) => {
    const newOrder = await Orders.create({ foodOrder, amount, shipping, totalAmount, comentary, orderStatus, paymenType });
    const findUser = await Users.findAll({ where: { email : userEmail}});
    await newOrder.addUsers(findUser);
    return newOrder;
}

module.exports = {
    getAllOrdersController,
    getOrderByIdController,
    putOrderByIdController,
    createOrderController
}