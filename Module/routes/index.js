var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var calculate = require("./modules/calculates");
    console.log(calculate.add(1,2));
    console.log(calculate.divide(1,2));
    console.log(calculate.minus(1,2));
    console.log(calculate.multiply(1,2));
    console.log(process.argv.length);
    process.argv.forEach(function (item,index) {
        console.log('index : ' + item);
    });

    var nconf = require("nconf");
    nconf.env(); // 환경변수 선언;
    var valueOS = nconf.get('os');
    console.log("OS 환경 변수 값 : "  + valueOS);

    // 기본적으로 제공해주는 모듈
    var internModules = require("./modules/intern_modules");
    console.log(internModules.internModule().os.hostname());
    console.log(internModules.internModule().os.freemem());
    // console.log(os.freeme);

    console.log(internModules.internModule().dirStr);
    console.log(internModules.internModule().dirStr2);

    res.render('index', { title: 'Express' });
});

module.exports = router;
