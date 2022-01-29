import * as AuthTypes from './types'
import api from '../../api'
import * as auth from '../../services/auth'

export const resetStoreAndLogOut = () => ({
  type: AuthTypes.RESET_STORE_AND_LOG_OUT,
})

export const signUpRequest = () => ({
  type: AuthTypes.SIGN_UP_REQUEST,
})

export const signUpError = (message) => ({
  type: AuthTypes.SIGN_UP_ERROR,
  payload: message,
})

export function signUpWithGoogleRequest() {
  return async function signUpThunk(dispatch) {
    dispatch(signUpRequest())
    try {
      await auth.singInWithGoogle()
    } catch (error) {
      dispatch(signUpError(error.message))
    }
  }
}

export function signUpWithEmailRequest(email, password) {
  return async function signUpThunk(dispatch) {
    dispatch(signUpRequest())
    try {
      await auth.singUpWithEmailAndPassword(email, password)
    } catch (error) {
      dispatch(signUpError(error.message))
    }
  }
}

export function signInWithEmailRequest(email, password) {
  return async function signUpThunk(dispatch) {
    dispatch(signUpRequest())
    try {
      await auth.singInWithEmailAndPassword(email, password)
    } catch (error) {
      dispatch(signUpError(error.message))
    }
  }
}

export function syncSignIn(data) {
  return async function syncSignInThunk(dispatch) {
    const token = await auth.getCurrentUserToken()

    if (!token) {
      return dispatch(signOutSuccess())
    }

    const response = await api.signUp(
      {
        Authorization: `Bearer ${token}`,
      },
      data
    )

    if (response.errorMessage) {
      return dispatch(signUpError(response.errorMessage))
    }

    return dispatch(signUpSuccess(response.data))
  }
}

export const signUpSuccess = (user) => ({
  type: AuthTypes.SIGN_UP_SUCCESS,
  payload: user,
})

export const signOutRequest = () => ({
  type: AuthTypes.SIGN_OUT_REQUEST,
})

export function signOut() {
  return async function signOutThunk(dispatch) {
    dispatch(signOutRequest())

    const token = await auth.getCurrentUserToken()

    if (!token) {
      return dispatch(signOutSuccess())
    }

    const response = await api.signOut({
      Authorization: `Bearer ${token}`,
    })

    if (response.errorMessage) {
      return dispatch(signOutError(response.errorMessage))
    }

    auth.signOut()

    return dispatch(signOutSuccess())
  }
}

export const signOutError = (message) => ({
  type: AuthTypes.SIGN_OUT_ERROR,
  payload: message,
})

export const signOutSuccess = () => ({
  type: AuthTypes.SIGN_OUT_SUCCESS,
})

export function sendPasswordResetEmail(email) {
  return async function sendPasswordResetEmailRequestThunk(dispatch) {
    dispatch(sendPasswordResetEmailRequest())
    try {
      await auth.sendPasswordResetEmail(email)
      dispatch(sendPasswordResetEmailSuccess())
    } catch (error) {
      dispatch(sendPasswordResetEmailError(error.message))
    }
    return dispatch(sendPasswordResetEmailSuccess())
  }
}

export const sendPasswordResetEmailRequest = () => ({
  type: AuthTypes.SEND_PASSWORD_RESET_EMAIL_REQUEST,
})

export const sendPasswordResetEmailError = (message) => ({
  type: AuthTypes.SEND_PASSWORD_RESET_EMAIL_ERROR,
  payload: message,
})

export const sendPasswordResetEmailSuccess = () => ({
  type: AuthTypes.SEND_PASSWORD_RESET_EMAIL_SUCCESS,
})

export const resetAuthState = () => ({
  type: AuthTypes.RESET_AUTH_STATE,
})

export function updateProfile(formInfo) {
  console.log('UPDATE PROFILE')
  return async function updateProfileThunk(dispatch) {
    const token = await auth.getCurrentUserToken()

    console.log('PRE TOKEN')
    console.log(token)
    if (!token) return
    console.log('POST TOKEN')

    const response = await api
      .updateProfileRequest(
        {
          Authorization: `Bearer ${token}`,
        },
        {
          email: formInfo.get('email'),
          profilePicture: formInfo.get('profilePicture'),
        }
      )
      .then((res) => console.log(res))
    console.log('RESPONSE:')
    console.log(response)

    console.log('PRE-RESPONSE.ERRORMESSAGE')
    if (response.errorMessage) return
    console.log('POST-RESPONSE.ERRORMESSAGE')

    console.log('PRE-CHANGE USER INFO')
    dispatch(changeUserInfo(response.user))

    return
  }
}

export const changeUserInfo = (userInfo) => {
  console.log('CHANGE USER INFO')
  return {
    type: AuthTypes.CHANGE_USER_INFO,
    payload: userInfo,
  }
}
