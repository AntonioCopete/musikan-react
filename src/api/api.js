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

  function getTracks(headers, liked) {
    const url = liked ?? ''
    return request({
      url: `/me/tracks/${url}`,
      requestMethod: 'GET',
      headers: headers,
    })
  }

  function deleteTrack(headers, id) {
    return request({
      url: `/tracks/${id}`,
      requestMethod: 'DELETE',
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
      url: '/tracks',
      requestMethod: 'POST',
      headers: headers,
      body: body,
    })
  }

  function getTrackInfo(headers, trackId) {
    return request({
      url: `/tracks/${trackId}`,
      requestMethod: 'GET',
      headers: headers,
    })
  }

  function updateTrackInfo(headers, body, trackId) {
    return request({
      url: `/tracks/${trackId}`,
      requestMethod: 'PATCH',
      headers: headers,
      body: body,
    })
  }

  function likeTrack(userId, trackId) {
    return request({
      url: `/tracks/${trackId}/like`,
      requestMethod: 'PUT',
      headers: { _id: userId },
    })
  }

  function getCurrentTrackInfo(headers, trackId) {
    return request({
      url: `/tracks/${trackId}/play`,
      requestMethod: 'GET',
      headers: headers,
    })
  }

  function getUserPlaylists(userId) {
    return request({
      url: `/playlist`,
      requestMethod: 'GET',
      headers: { _id: userId },
    })
  }

  function createPlaylist(headers, body) {
    return request({
      url: `/playlist`,
      requestMethod: 'POST',
      headers: headers,
      body: body,
    })
  }

  function getPlaylist(headers, id) {
    return request({
      url: `/playlist/${id}`,
      requestMethod: 'GET',
      headers: headers,
    })
  }

  function getTracksForPlaylist(headers) {
    return request({
      // url: `/playlist/${id}`,
      requestMethod: 'GET',
      headers: headers,
    })
  }

  function deletePlaylist(headers, id) {
    return request({
      url: `/playlist/${id}`,
      requestMethod: 'DELETE',
      headers: headers,
    })
  }

  function addTrackstoPlaylist(headers, body) {
    return request({
      // url: `/playlist/${id}`,
      requestMethod: 'POST',
      headers: headers,
      body: body,
    })
  }

  function followPlaylist(headers, id) {
    return request({
      url: `/playlist/${id}/follow`,
      requestMethod: 'PUT',
      headers: headers,
    })
  }

  function updatePlaylistInfo(headers, body, id) {
    return request({
      url: `/playlist/update/${id}`,
      requestMethod: 'PATCH',
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
    deleteTrack: deleteTrack,
    getGenres: getGenres,
    uploadTrack: uploadTrack,
    getTrackInfo: getTrackInfo,
    updateTrackInfo: updateTrackInfo,
    likeTrack: likeTrack,
    getCurrentTrackInfo: getCurrentTrackInfo,
    getUserPlaylists: getUserPlaylists,
    createPlaylist: createPlaylist,
    getPlaylist: getPlaylist,
    addTrackstoPlaylist: addTrackstoPlaylist,
    getTracksForPlaylist: getTracksForPlaylist,
    deletePlaylist: deletePlaylist,
    followPlaylist: followPlaylist,
    updatePlaylistInfo: updatePlaylistInfo,
  }
}

export default makeApi()
