import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Post from './Post'

export default function Posts({number}) {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/posts')
    .then(res => setPosts(res.data.slice(0, number)))
  }, [number])
  return (
    <div className='posts_wrapper'>
      {posts ? posts.map(e => (
        <Post key={e._id}title={e.title}body={e.body}/>
      ))
      :
      (<p>Loading...</p>)
      }
    </div>
  )
}
