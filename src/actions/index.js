import axios from 'axios'

export const increment = (n = 1) => ({ type: 'INCREMENT', payload: n })
export const decrement = (n = 1) => ({ type: 'DECREMENT', payload: n })

export const fetchUsers = () => dispatch => {
  dispatch({ type: 'FETCH_USERS' })
  axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
    dispatch({ type: 'FETCH_USERS_SUCCESS', payload: res.data })
  })
}
