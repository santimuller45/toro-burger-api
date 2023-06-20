const { getAllMenu, getFoodByName, getFoodByID } = require('../controllers/foodControllers.js');

const handlerGetMenu = async (req, res) => {
    const { name } = req.query;
    try {
      const productsArray = name 
        ? await getFoodByName(name)
        : await getAllMenu()
      if (productsArray.length < 1) throw Error('Products not found');
      res.status(200).json(productsArray);
    } catch (error) {
      res.status(400).send(error.message);
    };  
  };
  
  const handlerGetFoodByID = async (req, res) => {
    const { foodID } = req.params;
    try {
      const product = await getFoodByID(foodID);
      if (product === null) throw Error('Product not found');
      res.status(200).json(product);
    } catch (error) {
      res.status(400).send(error.message);
    };  
  };

  module.exports = {
    handlerGetMenu,
    handlerGetFoodByID
  }