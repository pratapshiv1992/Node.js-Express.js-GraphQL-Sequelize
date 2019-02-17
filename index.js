const app = require('express')();
const port = 3000;

app.get('/test',(req,res)=> {
    res.send(`Hi it's ${new Date().toUTCString()}`);
});

app.listen(port,()=>{
    console.log('server running at port ');
})