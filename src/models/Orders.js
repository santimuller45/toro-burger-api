const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("orders", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    foodOrder: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    amount: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    shipping: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    totalAmount: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    comentary: {
      type: DataTypes.STRING,
      defaultValue:'empty'
    },
    orderStatus: {
      type: DataTypes.STRING,
      defaultValue: 'PENDING',
    },
    paymenType: {
      type: DataTypes.STRING,
      defaultValue:'EFECTIVO/TRANSFERENCIA'
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },{
    // timestamps: false,
  });
};