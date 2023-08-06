const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body:{ type: String, required: true },
  likes: Number,
  dislikes: Number,
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;