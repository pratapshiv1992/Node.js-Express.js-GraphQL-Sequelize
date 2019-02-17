const app = require('express')();
const port = 3000;
const routes = require('./routes.js');
const graphQLApi = require('./api.js');

app.use(routes);
app.use(graphQLApi);

app.listen(port,()=>{
    console.log(`server running at port ${port}`);
});

