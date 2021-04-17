import React from 'react'
import { Link } from "react-router-dom";

export default function Button({name, route}) {
  

  return <button>
    <Link to={route}>{name}</Link>
  </button>
}
