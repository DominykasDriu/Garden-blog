import React from 'react'
import Button from "../Button";

export default function Post({title, body}) {
  return (
    <div className='post'>
      <h3 className="post_heading">{title}</h3>
      <p className="post_body">{body}</p>
      <Button name='Read More' route=''/>
    </div>
  )
}
