const Post = require('../models/posts')

getPosts = (req, res) => {
  Post.find().then(data => {
    if (!data) return res.status(404)
    res.json(data)
  })
}

getPost = (req, res) => {
  Post.findById(req.params.id).then((data) =>{
    if (!data) return res.status(404)
    res.json(data)
  });
}

addPost = (req, res) => {
  const post = new Post(req.body)
  post.save().then(data => res.json(data)).catch(err => res.status(400).json(err))
}

deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) return res.status(400).json(err)
    res.json(data)
  })
}

updatePost = (req, res) => {
  const updatedInfo = {
    title: req.body.title,
    body: req.body.body
  }
  Post.findByIdAndUpdate(req.params.id, updatedInfo, {}, (err, data) => {
    if (err) return res.status(400).json(err)
    res.json(data)
  })
}


module.exports = {
  getPosts,
  getPost,
  addPost,
  deletePost,
  updatePost
}