import React, { Component } from 'react'

import stateful from './../state'
import {
  selectUsers,
  selectName,
  selectUserEmails,
  selectEmails
} from './selectors'

export class User extends Component {
  render() {
    const { users, emails } = this.props

    const usersList = users.map(user => {
      return (
        <div key={user.id}>
          <h1> {selectName(user)} </h1>
          <div> {selectUserEmails(user, emails)} </div>
        </div>
      )
    })

    return <div>{usersList}</div>
  }
}

User.mapStateToProps = state => ({
  users: selectUsers(state),
  emails: selectEmails(state)
})

export default stateful(User)
