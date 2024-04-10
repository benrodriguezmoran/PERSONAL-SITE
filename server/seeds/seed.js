const db = require('../config/connection');
const { Blog , Image ,  Project } = require('../models');
const blogSeeds = require('./blogSeeds.js');
const gallerySeeds = require('./gallerySeeds.js')
const projectSeeds = require('./projectSeeds.js')
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Blog', 'blogs');
    await cleanDB('Image', 'images');
    await cleanDB('Project', 'projects');
    await Blog.create(blogSeeds);
    await Image.create(gallerySeeds);
    await Project.create(projectSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
