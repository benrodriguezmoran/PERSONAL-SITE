const db = require('../config/connection');
const { Blog , Image } = require('../models');
const blogSeeds = require('./blogSeeds.json');
const gallerySeeds = require('./gallerySeeds.json')
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Blog', 'blogs');
    await cleanDB('Image', 'images')
    await Blog.create(blogSeeds);
    await Image.create(gallerySeeds)
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
