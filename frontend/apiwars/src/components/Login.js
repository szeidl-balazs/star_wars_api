import React from 'react'

export function Login() {
  return (
    <div id="allContainer">
        <div id="formContainer">
          <h1>Please Log In</h1>
          <label>Username: </label>
          <input type="text" placeholder="Username"></input>
          <label>Password: </label>
          <input type="password" placeholder="Password"></input>
          <button>Login</button>
        </div>
      </div>
  )
}


