// 운영체제 확인 내장 모듈
var os = require('os');
console.log('hostname : ' + os.hostname);
console.log('memory : ' + os.freemem);

// path 내장 모듈
var path = require("path");
var directories = ["clubs", "school", "project"];
var dirStr = directories.join();  // join : ',' 를 기반으로해서 문자열로 합쳐짐
console.log("dir :" + dirStr);

var dirStr2 = directories.join(path.sep); // 구분자를 join 내부에 둘 수 있음.
console.log("dir2 : " + dirStr2); // 경로의 구분

path.join(__dirname, "users/school/test.js"); // 경로를 합쳐주는데 파일 seprator인 '/' 를 붙여줌
exports.internModule = function () {
    return {
        os : os,
        dirStr : dirStr,
        dirStr2 : dirStr2
    }
};