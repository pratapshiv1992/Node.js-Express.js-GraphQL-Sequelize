const { GraphQLNonNull ,GraphQLString,GraphQLList } = require("graphql");
const { user } = require('../db');
const { userType } = require('./userType');

const getUser = {
type: userType,
args: {
    email:{type: new GraphQLNonNull(GraphQLString )},
},
async resolve(parent, args, context) {
    return await user.findOne({where:{email:args.email},raw:true }).catch(e=>console.error(e));
}};


const getAllUser = {
type: GraphQLList(userType),
async resolve(parent, args, context) {
    return await user.findAll({raw:true}).catch(e=>console.error(e));
}};

module.exports = {
    getUser,
    getAllUser
};