import { selector } from './../../../src/index'

export const selectUsers = selector('users')
export const selectName = selector('name')
export const selectEmails = selector('emails')
export const selectEmailIds = user => selector('emails')
export const selectUserEmail = (user, emails) => {
  const ids = selectEmailIds(user)
  emails.filter(email => ids.find(email.id))
}
