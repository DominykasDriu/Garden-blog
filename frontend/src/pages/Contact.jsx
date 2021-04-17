import React from 'react'

export default function Contact() {
  return (
    <main className='contact_wrapper'>
      <div className="contact">
        <h1 className='contact_heading'>Contact me.</h1>
        <form className='contact_form'>
          <div className="contact_form__wrapper">
            <p className='contact_form__wrapper__label'>Name</p>
            <input className='contact_form__wrapper__input' type="text"/>
          </div>
          <div className="contact_form__wrapper">
            <p className='contact_form__wrapper__label'>Email</p>
            <input className='contact_form__wrapper__input' type="text"/>
          </div>
          <div className="contact_form__wrapper">
            <p className='contact_form__wrapper__label'>Message</p>
            <textarea className='contact_form__wrapper__textarea'></textarea>
          </div>
          <input className='contact_form__submit' type="submit"/>
        </form>
      </div>
    </main>
  )
}
