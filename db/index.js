const Sequelize = require('sequelize');
const { database,username,password,host } = require("./config");

const db = new Sequelize(database,username,password, {
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


const user = db.define("user",{ // creating our first model
    name:{ type:Sequelize.STRING },
    age: { type: Sequelize.INTEGER, allowNull: false },
    email:{type:Sequelize.STRING,allowNull:false ,unique:true},
    password:{type:Sequelize.STRING,allowNull:false},
    dob: { type: Sequelize.DATE , allowNull: false },
    status: { type: Sequelize.BOOLEAN, allowNull: false },
});

user.sync({force: true}) // force: true will drop the table if it already exists

module.exports = {
user,
};
