import { makeRequest } from './api-utils'

function makeApi(request = makeRequest()) {
  function signUp(headers, data) {
    return request({
      url: '/user/sign-up',
      requestMethod: 'POST',
      headers: headers,
      body: data,
    })
  }

  function signOut(headers) {
    return request({
      url: '/user/sign-out',
      requestMethod: 'POST',
      headers: headers,
    })
  }

  return {
    signUp: signUp,
    signOut: signOut,
  }
}

export default makeApi()
