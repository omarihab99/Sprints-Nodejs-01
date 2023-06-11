const {writeFile, readFileSync} = require("fs");
const moment = require("moment");
const readJsonFile = (file)=>{
    return JSON.parse(readFileSync(file, "utf8"));
}
const writeJsonFile = (file, data)=>{
    writeFile(file, JSON.stringify(data), "utf8", err => {
        if(err) throw err;
    });
}
file = 'problem2.json';
const data = readJsonFile(file);
for(const element of data.accidents){
    element.date = moment(element.date, "MM/DD/YYYY").format("YYYY-MM-DD");
}
console.log(data);
writeJsonFile(file,data);