import React, { useRef } from 'react'

const App = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email address</label>
        <input defaultValue="myemail" ref={emailRef} className="form-control" />
        <small className="form-text text-muted">error</small>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          ref={passwordRef}
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
