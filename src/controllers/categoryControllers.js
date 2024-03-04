const { Categorys } = require("../db.js");
const { categoryHelper } = require('../helpers/category.js');

const createCategorys = async () => {
    return await Categorys.bulkCreate( categoryHelper );
};

const getAllCategorys = async () => {
    return await Categorys.findAll();
}

// FALTA AGREGAR AL MENU SUS CATEGORIAS

module.exports = {
    createCategorys,
    getAllCategorys
}