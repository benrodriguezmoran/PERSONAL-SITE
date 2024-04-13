const fs = require('fs')
const path = "./seeds/projects/"
var projectSeeds = []
fs.readdirSync(path).forEach(file => {
    var temp = fs.readFileSync(`${path}/${file}`).toString();
    let footer = `, "path": "${file}" }`
    temp = temp.concat(footer);

    projectSeeds.push(JSON.parse(temp));
});


module.exports = projectSeeds;