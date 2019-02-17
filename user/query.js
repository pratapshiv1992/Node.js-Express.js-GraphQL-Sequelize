const { GraphQLNonNull ,GraphQLString} = require("graphql");
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

module.exports = {getUser};