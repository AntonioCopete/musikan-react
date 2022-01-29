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

  function updateProfileRequest(headers, body) {
    console.log('HEADERS:')
    console.log(headers)
    console.log('BODY')
    console.log(body)
    return request({
      url: '/user/update',
      requestMethod: 'PATCH',
      headers: headers,
      body: body,
    })
  }

  return {
    signUp: signUp,
    signOut: signOut,
    updateProfileRequest: updateProfileRequest,
  }
}

export default makeApi()
