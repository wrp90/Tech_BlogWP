const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const commentData = require('./commentData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

//   const posts = await User.bulkCreate(postData, {
//     individualHooks: true,
//     returning: true,
//   });

//   const comments = await User.bulkCreate(commentData, {
//     individualHooks: true,
//     returning: true,
//   });

  let posts = []; // array of post that we create

  for (const post of postData) {
    const currentPost = await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
    posts.push(currentPost)
  }

  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      post_id: posts[Math.floor(Math.random() * posts.length)].id
    });
  }

  process.exit(0);
};

seedDatabase();
