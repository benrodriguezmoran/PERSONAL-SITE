const fs = require('fs')
var gallerySeeds = []
fs.readdirSync("../client/public/images").forEach(file => {
    var temp = `{"title":"${file}","path":"/images/${file}"}`;
    gallerySeeds.push(JSON.parse(temp));
});


module.exports = gallerySeeds;