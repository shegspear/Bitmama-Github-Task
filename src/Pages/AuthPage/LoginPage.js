import React from 'react'

import './style.css';

function LoginPage() {
  return (
    <div className='login-page'>

      <div className='login-form'>

        <img 
          src='assets/logo/github-logo.png'
          alt='github logo'
          className='github-logo'
        />

        <p className='form-title'>
          Hello there !!
        </p>

        <p className='form-title'>
          Login to my Github Task
        </p>

        <button
          className='login-btn'
        >
           Login
        </button>

      </div>

    </div>
  )
}

export default LoginPage