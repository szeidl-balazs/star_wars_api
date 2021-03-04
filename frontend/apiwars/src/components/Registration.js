import React from 'react'

export function Registration() {
  return (
      <div id="allContainer">
        <div id="formContainer">
          <h1>Registration</h1>
          <label>Username: </label>
          <input type="text" placeholder="Username"></input>
          <label>Password: </label>
          <input type="password" placeholder="Password"></input>
          <button>Submit</button>
        </div>
      </div>
  )
}
