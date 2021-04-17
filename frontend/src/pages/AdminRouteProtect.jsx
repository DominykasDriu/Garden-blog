import React, { useContext, useEffect, useState} from 'react'
import axios from 'axios'
import Admin from './Admin'
import LogIn from './LogIn'
import { IsAdminContext } from '../App'

export default function AdminRouteProtect() {
  
  const authentication = useContext(IsAdminContext)

  const [authRender, setAuthRender] = useState(<LogIn />)

    useEffect(() => {
      if (sessionStorage.getItem('auth-token')) {
        axios({
          method: 'POST',
          headers: {'auth-token': sessionStorage.getItem('auth-token')},
          url: 'http://localhost:5000/auth'
        })
        .then(res => {
          res.data.auth ? setAuthRender(<Admin />) : setAuthRender(<LogIn />)
        })
      } else {
        setAuthRender(<LogIn />)
      }
    }, [authentication.isAdmin])

    return authRender
}
