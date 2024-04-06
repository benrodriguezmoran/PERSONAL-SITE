const fs = require('fs')
var gallerySeeds = []
fs.readdirSync("/home/ben/Documents/PROJECTS/PERSONAL-SITE/client/public/images").forEach(file => {
    var temp = `{"title":"${file}","path":"/images/${file}"}`;
    gallerySeeds.push(JSON.parse(temp));
});
console.log(gallerySeeds);

module.exports = gallerySeeds;