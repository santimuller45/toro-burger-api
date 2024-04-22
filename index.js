const app = require('./src/app.js');
const { conn } = require('./src/db.js');
const { PORT } = process.env;

const { getHelperMenu } = require('./src/controllers/foodControllers.js');
const { createAdmin } = require('./src/controllers/usersControllers.js');
// const { createCategorys } = require('./src/controllers/categoryControllers.js');

// Syncing all the models at once.
conn.sync({ force: true }).then( async () => {  // cambio a alter en lugar de force
    await getHelperMenu();
    await createAdmin();
    // await createCategorys();
    app.listen( PORT, () => {
        console.log('Servidor corriendo en el puerto' , PORT);
    });
});