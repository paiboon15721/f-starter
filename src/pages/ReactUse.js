import React from 'react'
import { useSpeech } from 'react-use'

const App = () => {
  const state = useSpeech('hi')

  return <pre>{JSON.stringify(state, null, 2)}</pre>
}

export default App
