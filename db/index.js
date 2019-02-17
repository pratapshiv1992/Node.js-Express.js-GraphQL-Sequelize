const Sequelize = require('sequelize');
const { database,user,password,host } = require("./config");

const sequelize = new Sequelize(database,user,password, {
    host:host,
    dialect:'mysql'|'sqlite'|'postgres'|'mssql',
    operatorsAliases: false,
    pool: { // pool configuration can be adjusted
        max: 10,
        min: 0,
        acquire: 20000,
        idle: 10000
    },
});

sequelize.authenticate().then(() => {   // Test the connection
    console.log('db connection eastablished successfully.');
}).catch(err => {
        console.error('Unable to connect to the database:', err);
});

