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

  function updateUserInfoRequest(headers, body) {
    return request({
      url: '/user/update',
      requestMethod: 'PATCH',
      headers: headers,
      body: body,
    })
  }

  function getTracks(headers) {
    return request({
      url: '/me/tracks',
      requestMethod: 'GET',
      headers: headers,
    })
  }

  function getLikedTracks(headers) {
    return request({
      url: '/me/tracks/liked',
      requestMethod: 'GET',
      headers: headers,
    })
  }

  function getGenres() {
    return request({
      url: '/genre',
      requestMethod: 'GET',
    })
  }

  function uploadTrack(headers, body) {
    return request({
      url: '/track',
      requestMethod: 'POST',
      headers: headers,
      body: body,
    })
  }

  return {
    signUp: signUp,
    signOut: signOut,
    updateAvatarRequest: updateAvatarRequest,
    updateUserInfoRequest: updateUserInfoRequest,
    getTracks: getTracks,
    getGenres: getGenres,
    uploadTrack: uploadTrack,
    getLikedTracks: getLikedTracks,
  }
}

export default makeApi()
