import * as UserTypes from './types'

export const UserInitialState = ''

const UserReducer = (state = UserInitialState, action) => {
  switch (action.type) {
    case UserTypes.SET_USERNAME: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default UserReducer
