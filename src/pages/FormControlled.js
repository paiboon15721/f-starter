import React, { useState } from 'react'

const App = () => {
  const [state, setState] = useState({
    email: 'myemail',
    password: 'mypassword',
  })

  const handleSubmit = e => {
    e.preventDefault()
    console.log(state)
  }

  const handleTextChange = e => {
    const { value, name } = e.target
    setState({ ...state, [name]: value.toLowerCase() })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email address</label>
        <input
          value={state.email}
          name="email"
          onChange={handleTextChange}
          className="form-control"
        />
        <small className="form-text text-muted">error</small>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          name="password"
          value={state.password}
          onChange={handleTextChange}
          className="form-control"
          placeholder="Password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default App
