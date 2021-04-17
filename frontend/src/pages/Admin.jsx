import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IsAdminContext } from '../App'

export default function Admin() {
  const authentication = useContext(IsAdminContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [isUpdateId, setIsUpdateId] = useState('')
  // Base URI & axios config to add auth token to all of the calls
  const baseURI = 'http://localhost:5000/post'
  axios.defaults.headers.common['auth-token'] = sessionStorage.getItem('auth-token')
  // Toast function
  const showToast = (text) => {
    toast.info(text, {
      position: "bottom-center",
      autoClose: 2000,
      closeOnClick: true,
      draggable: true,
      closeButton: false,
      hideProgressBar: true
    })
  }
  // Load all current posts on component mount
  useEffect(() => {
    getAllPosts()
  }, [])
  // Create or update post depending on isUpdateId state
  const createPostOrUpdate = (e) => {
    e.preventDefault()
    // If state declares this is a update send update request instead of create new
    if (isUpdateId) {
      // Check if updated post is not empty
      if (body && title) {
        // Use isUpdateId id value to update the post
        axios.put(`${baseURI}/${isUpdateId}`, {title: title, body: body})
        .then(res => {
          showToast(`Post ${res.data.title} was updated.`)
          getAllPosts()
        })
        .catch(err => showToast('Something went wrong!'))
      } else {
        showToast('Inputs can not be empty!')
      }
    } else {
      // Create new post
      axios.post(baseURI, {title: title, body: body})
      .then(res => getAllPosts())
      .catch(err => showToast('Something went wrong, please check you input!'))
    }
  }
  // Handle delete
  const handleDelete = (id) => {
    axios.delete(`${baseURI}/${id}`)
    .then(res => {
      getAllPosts()
      // Set isUpdateId to '' because user might have deleted the post that he had set to update
      setIsUpdateId('')
      showToast(`Post ${res.data.title} was deleted.`)
    })
    .catch(err => console.log(err))
  }
  // Handle update
  const handleUpdate = (id) => {
    // Feed the current title and body inputs with the post info
    axios.get(`${baseURI}/${id}`)
    .then(res => {
      setTitle(res.data.title)
      setBody(res.data.body)
      // Set isUpdateId state to post id which should be updated upon submit
      setIsUpdateId(res.data._id)
    })
  }
  // State of all current posts
  const [posts, setPosts] = useState('')

  const getAllPosts = () => {
    axios('http://localhost:5000/posts')
    .then(res => setPosts(res.data))
    // Upon any action clear input fields
    setTitle('')
    setBody('')
  }
  return (
    <main className='admin_wrapper'>
      <div className='admin'>
        <h1 className='admin_heading'>ADMIN</h1>
        {/* Change headline stating if post is being created or updated */}
        <h2 className='admin_subheadline'>{isUpdateId ? 'Update Post' : 'Add New Post'}</h2>
        <form className='admin_form' onSubmit={createPostOrUpdate}>
          <div className="admin_form__wrapper">
            <label className='admin_form__wrapper__label'>Post title</label>
            <input className='admin_form__wrapper__input' type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className="admin_form__wrapper">
            <label className='admin_form__wrapper__label'>Post body</label>
            <textarea className='admin_form__wrapper__textarea' type="text" value={body} onChange={(e) => setBody(e.target.value)}/>
          </div>
          <div className="admin_form__wrapper">
            {/* Change button text stating if post is being created or updated */}
            <input className='admin_form__wrapper__submit' type="submit" value={isUpdateId ? 'Update' : 'Submit'}/>
          </div>
        </form>
        <h2 className='admin_subheadline'>Delete & Update Posts</h2>
          <div className="admin_posts">
            {/* Render all available posts */}
            {!posts ? (<h3>No posts</h3>) :
            posts.map((e, index) => (
              <div key={index} className="admin_posts__wrapper">
                <p>{e.title}</p>
                <div className="admin_posts__wrapper_buttons">
                  <button className="admin_posts__wrapper_buttons__button" onClick={() => handleDelete(e._id)}>Delete</button>
                  <button className="admin_posts__wrapper_buttons__button" onClick={() => handleUpdate(e._id)}>Update</button>
                </div>
              </div>
            ))
            }
          </div>
          <button className="admin_button" onClick={() => {
            // After log out set IsAdmin to false, so it rerenders AdminRouteProtect component and throws log in page
            authentication.setIsAdmin(false)
            // Remove auth token from seesion storage
            sessionStorage.removeItem('auth-token')
          }}>Log Out</button>
      </div>
      {/* Toast container */}
      <ToastContainer/>
    </main>
  )
}
