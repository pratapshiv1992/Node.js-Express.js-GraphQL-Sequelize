const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require("graphql");
const { user } = require('../db');
const {getUser,getAllUser}  = require('../user/query');
const {createUser}  = require('../user/mutation');


const query = new GraphQLObjectType({
name: "Query",
fields: {
    getUser:getUser,
    getAllUser:getAllUser
}
})


const mutation = new GraphQLObjectType({
name: "Mutation",
fields: {
    createUser:createUser,
}
})



module.exports = new GraphQLSchema({query, mutation });
