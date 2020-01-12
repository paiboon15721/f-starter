import React from 'react'

const App = () => {
  return (
    <form>
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" />
        <small id="emailHelp" className="form-text text-muted">
          error
        </small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
        />
      </div>
      <button htmlType="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default App
