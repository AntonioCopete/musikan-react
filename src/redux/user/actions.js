import * as UserTypes from './types'

export const setUserName = ({ userName }) => ({
  type: UserTypes.SET_USERNAME,
  payload: userName,
})

export const deleteUserName = () => ({
  type: UserTypes.DELETE_USERNAME,
})
