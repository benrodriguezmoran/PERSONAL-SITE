const db = require('../config/connection');
const { Blog } = require('../models');
const blogSeeds = require('./blogSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Blog', 'blogs');


    await Blog.create(blogSeeds);

    // for (let i = 0; i < blogSeeds.length; i++) {
    //   const { _id, blogTitle } = await Blog.create(blogSeeds[i]);
    //   const blog = await Blog.findOneAndUpdate(
    //     {title: blogTitle},
    //     {
    //       $addToSet: {
    //         blogs: _id,
    //       },
    //     }
    //   );
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
