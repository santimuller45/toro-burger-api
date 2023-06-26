const hamburguesaURL = 'https://cdn.pixabay.com/photo/2017/08/12/18/59/snack-2635035_960_720.jpg';
const nuggetsURL = 'https://cdn.pixabay.com/photo/2023/05/16/09/50/ai-generated-7997141_960_720.jpg';

const menuToro = [
    {
        name: "Nuggets de Pollo SMALL",
        image: nuggetsURL,
        description: "6 unidades + PORCIÓN DE FRITAS",
        price: 1300
    },
    {
        name: "Nuggets de Pollo BIG",
        image: nuggetsURL,
        description: "12 UNIDADES + PORCIÓN DE FRITAS",
        price: 2200
    },
    {
        name: "Menú NIÑOS",
        image: hamburguesaURL,
        description: "HAMBURGUESA CON QUESO / HAMGURGUESA CON HUEVO / HAMBURGUESA SOLA",
        price: 1400
    },
    {
        name: "HAMBURGUESA TORO SIMPLE",
        image: hamburguesaURL,
        description: "CHEDDAR - PANCETA - SALSA MC - PEPINOS",
        price: 1450
    },
    {
        name: "HAMBURGUESA TORO DOBLE",
        image: hamburguesaURL,
        description: "CHEDDAR - PANCETA - SALSA MC - PEPINOS",
        price: 1950
    },
    {
        name: "HAMBURGUESA CLÁSICA",
        image: hamburguesaURL,
        description: "TOMATE - LECHUGA - EXTRA QUESO DAMBO - SALSA MC",
        price: 1450
    },
    {
        name: "HAMBURGUESA CRISPY SIMPLE",
        image: hamburguesaURL,
        description: "CHEDDAR - HUEVO - PANCETA - SALSA MC - SALSA ALIOLI - CEBOLLA CRISPY",
        price: 1550
    },
    {
        name: "HAMBURGUESA CRISPY DOBLE",
        image: hamburguesaURL,
        description: "CHEDDAR - HUEVO - PANCETA - SALSA MC - SALSA ALIOLI - CEBOLLA CRISPY",
        price: 2150
    },
    {
        name: "HAMBURGUESA VEGGIE",
        image: hamburguesaURL,
        description: "HAMBURGUESA DE VERDURA DEL DIA - SALSA - TOMATE - QUESO CHEDDAR - LECHUGA",
        price: 1400
    },
    {
        name: "CHEESE BURGER SIMPLE",
        image: hamburguesaURL,
        description: "CON MUCHO QUESO CHEDDAR",
        price: 1400
    },
    {
        name: "CHEESE BURGER DOBLE",
        image: hamburguesaURL,
        description: "CON MUCHO QUESO CHEDDAR",
        price: 1900
    },
    {
        name: "CHEESE BURGUER TRIPLE",
        image: hamburguesaURL,
        description: "CON MUCHO QUESO CHEDDAR",
        price: 2400
    },
    {
        name: "HAMBURGUESA BIG BANG",
        image: hamburguesaURL,
        description: "DOBLE CARNE - CHEDDAR - PEPINOS - CEBOLLA MORADA - LECHUGA - SALSA MC",
        price: 1950
    },
    {
        name: "HAMBURGUESA DE CERDO",
        image: hamburguesaURL,
        description: "HAMBURGUESA DE CERDO - CEBOLLA MORADA - TOMATE - LECHUGA - CHEDDAR - SALSA - ALIOLI",
        price: 1450
    },
    {
        name: "HAMBURGUESA XTREME",
        image: hamburguesaURL,
        description: "250 GRS DE CARNE - LECHUGA - CHEDDAR - PEPINO - HUEVO - CEBOLLA - TOMATE",
        price: 1950
    },
    {
        name: "HAMBURGUESA KANSAS",
        image: hamburguesaURL,
        description: "DOBLE CARNE - CEBOLLA - QUESO DAMBO - HUEVO",
        price: 1950
    },
    {
        name: "HAMBURGUESA HYP SIMPLE",
        image: hamburguesaURL,
        description: "HUEVO - PANCETA - CHEDDAR",
        price: 1550
    },
    {
        name: "HAMBURGUESA HYP DOBLE",
        image: hamburguesaURL,
        description: "HUEVO - PANCETA - CHEDDAR",
        price: 2150
    },
    {
        name: "HAMBURGUESA OKLAHOMA",
        image: hamburguesaURL,
        description: "DOBLE CARNE - CHEDDAR - CEBOLLA",
        price: 1950
    },
    {
        name: "HAMBURGUESA CANGREBURGER",
        image: hamburguesaURL,
        description: "DOBLE CARNE - SALSA - LECHUGA - CHEDDAR - CEBOLLA",
        price: 1950
    }
];

module.exports = { menuToro };