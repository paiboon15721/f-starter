import React from 'react'
import { Progress, Button } from 'antd'
import { connect } from 'react-redux'
import * as actions from 'actions'

const App = ({ num, increment, decrement }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <Button type="primary" onClick={() => increment(5)}>
      INCREMENT
    </Button>
    <Button type="danger" onClick={() => decrement(5)}>
      DECREMENT
    </Button>
    <Progress status="active" type="circle" percent={num} />
  </div>
)

export default connect(state => ({ num: state.counter }), actions)(App)
