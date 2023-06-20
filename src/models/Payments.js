const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("payments", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
    },
    userEmail:{
      type: DataTypes.STRING,
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },{
    timestamps: false,
  });
};