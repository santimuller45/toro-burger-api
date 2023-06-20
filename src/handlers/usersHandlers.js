const { getAllUsersDB , getUser , createUser , loginUser } = require('../controllers/usersControllers.js')

const getUsersHandler = async (req, res) => {
    try {
        const { email } = req.query;
        const userDB = email ? await getUser(email) : await getAllUsersDB();
        res.status(200).json(userDB);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const createUserHandler = async (req, res) => {
    try {
        const { email , password , firstname , lastname , address , cp , city , country , phone,adminType } = req.body;
        const newUser = await createUser( email , password , firstname , lastname , address , cp , city , country , phone ,adminType)
        res.status(200).send(newUser);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const loginUserHandler = async (req, res) => {
    try {
        const { email , password } = req.body;
        const user = await loginUser( email , password );
        if (user) res.status(200).send(user);
    } catch (error) {
        res.status(400).json({ error : error.message});
    }
};

module.exports = {
    getUsersHandler,
    createUserHandler,
    loginUserHandler
}