import React, { useEffect } from 'react'
import { Table } from 'antd'

const App = props => {
  useEffect(() => {
    props.fetchUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  return (
    <Table
      loading={props.loading}
      dataSource={props.users}
      rowKey="id"
      columns={columns}
    />
  )
}

export default App
