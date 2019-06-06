let express = require('express');
let router = express.Router();
let data = require("../database/mongodb");

router.get('/',function(req,res){
    res.send('redirected');
});

router.post('/',function(req,res){
    // let reqbody = req.body.data;
    //
    // let newpost = new data({name: reqbody});
    //
    // newpost.save(function (err) {
    //     if(err){
    //         return console.error(err);
    //     }
    // });

    console.log(req.body);
    res.end();
});

module.exports = router;
