const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require("graphql");
const query = new GraphQLObjectType({
name: "Query",
fields: {
    getUser: ({
        type: GraphQLString,
        resolve(parent, args,{req} ){
            return "fetch user from the database.."
        }
    }),
}
})


const mutation = new GraphQLObjectType({
name: "Mutation",
fields: {
createUser:({
    type:GraphQLString,
    resolve(parents, args){
        return "insert the user in the database.."
    }
})
}})



module.exports = new GraphQLSchema({query, mutation });
