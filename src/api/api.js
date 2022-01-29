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
      requestMethod: 'GET',
      headers: headers,
    })
  }

  function updateAvatarRequest(headers, body) {
    return request({
      url: '/user/update-avatar',
      requestMethod: 'POST',
      headers: headers,
      body: body,
    })
  }

  return {
    signUp: signUp,
    signOut: signOut,
    updateAvatarRequest: updateAvatarRequest,
  }
}

export default makeApi()
