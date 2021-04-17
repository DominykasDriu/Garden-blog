const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const PORT = 5000;
// Middleware
app.use(cors())
app.use(express.json())
const auth = require('./middleware/auth')
// Controllers
const posts = require('./controllers/posts')
const logIn = require('./controllers/logIn')
// DB
mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(res => app.listen(PORT))
// Routes
// Get all posts
app.get('/posts', posts.getPosts)
// Get single post by ID
app.get('/post/:id', posts.getPost)
// Add post
app.post('/post', auth, posts.addPost)
// Delete post
app.delete('/post/:id', auth, posts.deletePost)
// Update post
app.put('/post/:id', auth, posts.updatePost)
// LogIn
app.post('/login', logIn)
// Check if user is authed
app.post('/auth', auth, (req, res) => {res.json({'auth': true})})