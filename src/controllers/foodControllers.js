const { Foods } = require('../db.js');
const { Op } = require('sequelize');

// CREACIÓN DEL MENÚ CON EL HELPER PARA GUARDAR EN LA BASE DE DATOS

const { menuToro } = require('../helpers/menu.js')

const getHelperMenu = async () => {
  return await Foods.bulkCreate( menuToro );
}

////////////////////////////////////////////////////////////////////

const getAllMenu = async () => {
  return await Foods.findAll();
};
  
const getFoodByName = async (name) => {
  return await Foods.findAll({ 
    where: { name: { [Op.substring]: `${name}` }}
  });
};
  
const getFoodByID = async(foodID) => {
  return await Foods.findByPk(foodID);
};

module.exports = {
  getHelperMenu,
  getAllMenu,
  getFoodByName,
  getFoodByID
}