const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require("graphql");
const { user } = require('../db');
const {getUser}  = require('../user/query');
const {createUser}  = require('../user/mutation');


const query = new GraphQLObjectType({
name: "Query",
fields: {
    getUser:getUser,
}
})


const mutation = new GraphQLObjectType({
name: "Mutation",
fields: {
    createUser:createUser,
}
})



module.exports = new GraphQLSchema({query, mutation });
