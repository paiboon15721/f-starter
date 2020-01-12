import { connect } from 'react-redux'
import { fetchUsers } from 'actions'
import UserTable from 'components/UserTable'

export default connect(state => state.users, { fetchUsers })(UserTable)
