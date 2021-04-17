import React, { useState, useContext } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IsAdminContext } from '../App'

export default function LogIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const authentication = useContext(IsAdminContext)

  const handleLogIn = (e) => {
    e.preventDefault(e)
    axios.post(`http://localhost:5000/login`, {username, password})
    .then(res => {
      if (res.data.auth) {
        // set IsAdmin to true so AdminRouteProtect component rerenders and shows admin page instead of login
        authentication.setIsAdmin(true)
        // Set auth token in seesion storage
        sessionStorage.setItem('auth-token', res.data.token)
      } 
    })
    .catch(err => toast.info('Incorrect Credentials!', {
      position: "bottom-center",
      autoClose: 2000,
      closeOnClick: true,
      draggable: true,
      closeButton: false,
      hideProgressBar: true
    }))
  }

  return (
    <main className='login_wrapper'>
      <div className="login">
        <h2 className='login_headline'>Please log-in</h2>
        <form className='login_form' onSubmit={handleLogIn}>
          <div className="login_form__wrapper">
            <label className='login_form__wrapper__label'>Username</label>
            <input className='login_form__wrapper__input' type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="login_form__wrapper">
            <label className='login_form__wrapper__label'>Password</label>
            <input className='login_form__wrapper__input' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="login_form__wrapper">
            <input className='login_form__wrapper__submit' type="submit"/>
          </div>
        </form>
        <ToastContainer/>
      </div>
    </main>
  )
}
