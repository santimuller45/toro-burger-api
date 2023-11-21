const { getAllMenuController, getFoodByNameController, getFoodByIDController, postFoodController, putFoodController } = require('../controllers/foodControllers.js');

const handlerGetMenu = async (req, res) => {
    const { name } = req.query;
    try {
      const productsArray = name 
        ? await getFoodByNameController(name)
        : await getAllMenuController()
      if (productsArray.length < 1) throw Error('Food not founded');
      res.status(200).json(productsArray);
    } catch (error) {
      res.status(400).send(error.message);
    };  
  };
  
  const handlerGetFoodByID = async (req, res) => {
    const { foodID } = req.params;
    try {
      const product = await getFoodByIDController(foodID);
      if (product === null) throw Error('Food not founded');
      res.status(200).json(product);
    } catch (error) {
      res.status(400).send(error.message);
    };  
  };

  const handlerPostFood = async (req, res) => {
    const food = req.body;
    try {
      const result = await postFoodController(food);
      if (result === null) throw Error('Could not create food');
      res.status(200).send('Food created successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  const handlerPutFood = async (req, res) => {
    const food = req.body;
    try {
      const newStatusFood = await putFoodController(food);
      if (newStatusFood === null) throw Error('Could not update food or food not found');
      res.status(200).send('Food modified successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  module.exports = {
    handlerGetMenu,
    handlerGetFoodByID,
    handlerPostFood,
    handlerPutFood
  }