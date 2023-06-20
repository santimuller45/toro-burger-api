const { Users } = require("../db.js");
const { userAdmin } = require("../helpers/admin.js");

// CREAMOS EL ADMIN POR DEFAULT EN LA DB

const createAdmin = async () => {
  return await Users.create( userAdmin )
};

//función para determinar que datos vamos a mandar al front del usuario que utilizaremos

const infoUser = (data) => {
  return {
    email: data.email,
    firstname: data.firstname,
    lastname: data.lastname,
    address: data.address,
    cp: data.cp,
    city: data.city,
    country: data.country,
    phone: data.phone,
    userType: data.userType,
    adminType: data.adminType
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////

const getAllUsersDB = async () => {
    const allUsers = await Users.findAll();
    if (!allUsers) throw Error ("Did not found users in DB");
    else return allUsers;
};

const getUser = async ( email ) => {
  const findUser = await Users.findByPk(email, {
    include: [
      {
        model: Orders,
        attributes: ['id'],
        through: {
          attributes: [],
        }
      }
    ]
  });
  if (!findUser) throw Error("User did not found");
  else return findUser;
};

const createUser = async ( email , password , firstname , lastname , address , cp , city , country , phone , adminType ) => {
  const newUser = await Users.findByPk(email);
  if (!newUser) {
      const userType = "common_DB"
      await Users.create({ email , password , firstname ,  lastname , address , cp , city , country , phone , userType, adminType })
      return "User Created succesfully";
  } else throw Error ("Email already exist");
};

const loginUser = async ( email , password ) => {
  if (!email || !password) throw Error("Please enter email and password");
  const user = await Users.findByPk(email);
  if (!user) throw Error ("Incorrect email");
  else if (user.password !== password) throw Error ("Incorrect password");
  else if (!user.customerStatus) throw Error("User is currently disabled");
  else return infoUser(user);
};


module.exports = {
  createAdmin,
  getAllUsersDB,
  getUser,
  createUser,
  loginUser
}