import React from 'react'
import Posts from '../components/Blog/Posts'

export default function Blog() {
  return (
    <main className='blog_wrapper'>
      <div className="blog">
        <h1 className='blog_heading'>Blog.</h1>
        <Posts number='6'/>
      </div>
    </main>
  )
}
