import React from 'react'
import { Button, Form, Input } from 'antd'

const FormItem = Form.Item

const App = ({ form }) => {
  const { getFieldDecorator } = form

  const handleSubmit = e => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
      }
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormItem>
        {getFieldDecorator('email', {
          rules: [{ required: true, type: 'email' }],
        })(<Input placeholder="Email" />)}
      </FormItem>
      <FormItem>
        {getFieldDecorator('password', {
          rules: [{ required: true }],
        })(<Input type="password" placeholder="Password" />)}
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </FormItem>
    </Form>
  )
}

export default Form.create()(App)
