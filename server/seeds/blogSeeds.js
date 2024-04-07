const fs = require('fs')
const path = "/home/ben/Documents/PROJECTS/PERSONAL-SITE/server/seeds/blogs/"
var blogSeeds = []
fs.readdirSync(path).forEach(file => {
    var temp = fs.readFileSync(`${path}/${file}`).toString();
    let footer = `, "path": "${file}" }`
    temp = temp.concat(footer);

    blogSeeds.push(JSON.parse(temp));
});


module.exports = blogSeeds;