const router = require('express').Router();

router.get('/test',(req,res)=> {
    res.send(`Hi it's ${new Date().toUTCString()}`);
});

// /query?name=xyz
router.get('/query',(req,res)=> {
    const params = JSON.stringify(req.query);
    res.send(`you send me ${(params)}`);
});


module.exports = router;