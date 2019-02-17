const router = require('express').Router();
const schema = require("./schema")
const eGraphql = require("express-graphql")

router.use("/graphql",eGraphql(req => {
    return({
        schema,
        graphiql:true,
        context:{
            req: req
        }
    })
}));

module.exports = router;

