const { Foods } = require('../db.js');
const { Op } = require('sequelize');

// CREACIÓN DEL MENÚ CON EL HELPER PARA GUARDAR EN LA BASE DE DATOS

const { menuToro } = require('../helpers/menu.js')

const getHelperMenu = async () => {
  return await Foods.bulkCreate( menuToro );
}
const mayusLetter = (string) => string.toUpperCase();
////////////////////////////////////////////////////////////////////

const getAllMenuController = async () => {
  return await Foods.findAll();
};
  
const getFoodByNameController = async (name) => {
  const foodName = mayusLetter(name);
  return await Foods.findAll({
    where: { 
      name: {[Op.substring]:`${foodName}`}
    }})
};
  
const getFoodByIDController = async (foodID) => {
  return await Foods.findByPk(foodID);
};

const postFoodController = async (food) => {
  return await Foods.create(food);
};

const putFoodController = async ( food ) => {
  const findFoodByID = await Foods.findByPk(food.id);
  if (findFoodByID === null) return null;
  food.name ? findFoodByID.name = food.name : null;
  food.image ? findFoodByID.image = food.image : null;
  food.description ? findFoodByID.description = food.description : null;
  food.price ? findFoodByID.price = food.price : null;
  food.status ? findFoodByID.status = food.status : null;
  findFoodByID.save();
  return findFoodByID;
}

module.exports = {
  getHelperMenu,
  getAllMenuController,
  getFoodByNameController,
  getFoodByIDController,
  postFoodController,
  putFoodController
}