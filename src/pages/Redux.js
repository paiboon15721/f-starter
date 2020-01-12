import React from 'react'
import { connect } from 'react-redux'
import { Button, Tag } from 'antd'
import * as actions from 'actions'

const App = props => {
  const { num, increment, decrement } = props
  return (
    <div>
      <Tag color="magenta">{num}</Tag>
      <Button type="primary" onClick={() => increment(5)}>
        INCREMENT
      </Button>
      <Button type="danger" onClick={() => decrement(5)}>
        DECREMENT
      </Button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    num: state,
  }
}

export default connect(mapStateToProps, actions)(App)
