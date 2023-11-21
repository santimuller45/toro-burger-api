const { Router } = require("express");

const { handlerGetMenu ,handlerGetFoodByID ,handlerPostFood ,handlerPutFood } = require('../handlers/foodHandlers.js');

const foodRouter = Router();

foodRouter.get('/', handlerGetMenu);
foodRouter.get('/:foodID', handlerGetFoodByID);
foodRouter.post('/', handlerPostFood);
foodRouter.put('', handlerPutFood);

module.exports = foodRouter;