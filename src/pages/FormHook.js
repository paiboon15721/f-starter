import React from 'react'
import { useForm } from 'react-hook-form'

const App = () => {
  const { handleSubmit, register, errors } = useForm()

  const onSubmit = values => {
    console.log(values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Email address</label>
        <input
          name="email"
          defaultValue="myemail"
          ref={register({
            required: 'Requireddd',
          })}
          className="form-control"
        />
        <small className="form-text text-danger">
          {errors.email && errors.email.message}
        </small>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          name="password"
          ref={register({
            required: 'Required',
          })}
          className="form-control"
          placeholder="Password"
        />
        <small className="form-text text-danger">
          {errors.password && errors.password.message}
        </small>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default App
