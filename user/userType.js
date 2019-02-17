const {  GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLInt,GraphQLNonNull} = require("graphql");

const userType = new GraphQLObjectType({
    name: "UserInfo",
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        dob: { type: GraphQLString },
        status: { type: GraphQLBoolean },
    }
});

module.exports = {userType};