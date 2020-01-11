import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CommentApp from './CommentApp'

const App = () => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then(res => {
      setComments(res.data.slice(0, 50).map(v => v.body))
    })
  }, [])

  return (
    <div className="row">
      <div className="col">
        <CommentApp comments={comments} setComments={setComments} />
      </div>
      <div className="col">
        <CommentApp comments={comments} setComments={setComments} />
      </div>
    </div>
  )
}

export default App
