const { Router } = require('express');

const { handlerGetAllCategorys } = require('../handlers/categoryHandlers.js');

const categorysRouter = Router();

categorysRouter.get('/', handlerGetAllCategorys);

module.exports = categorysRouter;