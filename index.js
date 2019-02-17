const app = require('express')();
const port = 3000;

app.get('/test',(req,res)=> {
    res.send(`Hi it's ${new Date().toUTCString()}`);
});

// /query?name=xyz
app.get('/query',(req,res)=> {
    const params = JSON.stringify(req.query);
    res.send(`you send me ${(params)}`);
});

app.listen(port,()=>{
    console.log('server running at port ');
})