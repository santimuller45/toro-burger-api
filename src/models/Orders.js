const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("orders", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
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
    updated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },{
    timestamps: false,
  });
};