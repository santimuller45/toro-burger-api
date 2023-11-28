const { ADM_TORO, ADM_TORO_PASSWORD } = process.env;


const userAdmin = {
    email: ADM_TORO,
    password: ADM_TORO_PASSWORD,
    firstname: "LIHUEL",
    lastname: "ZELAYA",
    address: "",
    cp: 8000,
    city: "9 DE JULIO",
    country: "ARGENTINA",
    phone: 123456789,
    userType: "ADMIN",
    adminType: true
};

module.exports = {
    userAdmin
}

