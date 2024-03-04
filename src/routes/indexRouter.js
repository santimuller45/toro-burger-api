const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const usersRouter = require("./usersRouter.js");
const foodRouter = require('./foodRouter.js');
const ordersRouter = require("./ordersRouter.js");
const categorysRouter = require('./categoryRouter.js');
// const paymentsRouter = require("./paymentsRouter.js");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/users", usersRouter);
router.use("/foods", foodRouter);
router.use("/orders", ordersRouter);
router.use("/category", categorysRouter);
// router.use("/payments", paymentsRouter);


module.exports = router;