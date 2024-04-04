const db = require('../config/connection');
const { Blog } = require('../models');
const blogSeeds = require('./blogSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Blog', 'blogs');

    await Blog.create(blogSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
