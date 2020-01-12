import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd'
import axios from 'axios'

const App = props => {
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      props.dispatch({ type: 'FETCH_USERS', payload: res.data })
    })
  }, [])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'User Name',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'Street',
      dataIndex: 'address.street',
      key: 'address.street',
    },
  ]

  return <Table dataSource={props.users} rowKey="id" columns={columns} />
}

export default connect(state => ({ users: state.users.users }), null)(App)
