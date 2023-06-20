const { Router } = require("express");

const { handlerGetMenu, handlerGetFoodByID } = require('../handlers/foodHandlers.js');

const foodRouter = Router();

foodRouter.get("/", handlerGetMenu);
foodRouter.get("/:foodID", handlerGetFoodByID);

module.exports = foodRouter;