const app = require('express')();
const port = 3000;
const routes = require('./routes.js');

app.use(routes);


app.listen(port,()=>{
    console.log(`server running at port ${port}`);
});

