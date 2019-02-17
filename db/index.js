const Sequelize = require('sequelize');
const { database,user,password,host } = require("./config");

const db = new Sequelize(database,user,password, {
    host:host,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

db.authenticate().then(() => {
    console.log('Connection successfully.');
}).catch(err => {
        console.error('Unable to connect to the database:', err);
});

