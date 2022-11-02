var testFolder = './data';
var fs = require('fs');

fs.readdir(testFolder, function(reeor, filelist){
    console.log(filelist);
})