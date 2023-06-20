const { ADM_TORO, ADM_TORO_PASSWORD } = process.env;


const userAdmin = {
    email: ADM_TORO,
    password: ADM_TORO_PASSWORD,
    firstname: "LIHUEL",
    lastname: "ZELAYA",
    userType: "ADMIN",
    adminType: true
};

module.exports = {
    userAdmin
}

