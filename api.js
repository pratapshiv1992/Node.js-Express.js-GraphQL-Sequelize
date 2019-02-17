const router = require('express').Router();
const schema = require("./schema")
const eGraphql = require("express-graphql")

router.use("/graphql",eGraphql(req => {
    return({
        schema,
        graphiql:true,
        context:{
            user: req.user
        }
    })
}));

module.exports = router;

