const { GraphQLNonNull ,GraphQLString,GraphQLInt ,GraphQLBoolean } = require("graphql");

const { user } = require('../db');
const { userType } = require('./userType');

const createUser = {
type: GraphQLString,
    args: {
        name:{type: new GraphQLNonNull(GraphQLString )},
        age:{type: new GraphQLNonNull(GraphQLInt )},
        email:{type: new GraphQLNonNull(GraphQLString )},
        password:{type: new GraphQLNonNull(GraphQLString )},
        dob:{type: new GraphQLNonNull(GraphQLString )},
        status:{type: new GraphQLNonNull(GraphQLBoolean )},
    },
    async resolve(parent, args, context) {
        await user.create({...args}).catch(e=>console.error(e));
        return "user inserted into db successfully";
    }};

module.exports = {createUser};