import * as UserTypes from './types'

export const setUserName = ({ userName }) => ({
  type: UserTypes.SET_USERNAME,
  payload: userName,
})
