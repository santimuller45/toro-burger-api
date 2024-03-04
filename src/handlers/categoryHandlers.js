const { getAllCategorys } = require('../controllers/categoryControllers.js');

const handlerGetAllCategorys = async (req, res) => {
    try {
        const result = await getAllCategorys();
        if (result === null) throw Error ('Categorys did not found');
        res.status(200).json(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
};

//FALTA AGREGAR AL MENU SUS CATEGORIAS

module.exports = {
    handlerGetAllCategorys
}