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

  function getTracksToAdd(headers, playlistId) {
    return request({
      url: `/tracks/filter/${playlistId}`,
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

  function addTrackstoPlaylist(headers, body, id) {
    return request({
      url: `/playlist/${id}`,
      requestMethod: 'PATCH',
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

  function orderPlaylistTracks(headers, body, id) {
    return request({
      url: `/playlist/order/${id}`,
      requestMethod: 'PUT',
      headers: headers,
      body: body,
    })
  }

  function searchQuery(headers, query) {
    return request({
      url: `/search?q=${query}`,
      requestMethod: 'GET',
      headers: headers,
    })
  }

  function getUserInfo(headers, userId) {
    return request({
      url: `/user/${userId}`,
      requestMethod: 'GET',
      headers: headers,
    })
  }

  function getUserTracks(headers, userId) {
    return request({
      url: `/user/${userId}/tracks`,
      requestMethod: 'GET',
      headers: headers,
    })
  }

  function getUserPublicPlaylists(headers, userId) {
    return request({
      url: `/user/${userId}/playlist`,
      requestMethod: 'GET',
      headers: headers,
    })
  }

  function getPopularPlaylists(headers) {
    return request({
      url: `/playlist/public`,
      requestMethod: 'GET',
      headers: headers,
    })
  }

  function getAllUsers() {
    return request({
      url: `/user`,
      requestMethod: 'GET',
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
    getTracksToAdd: getTracksToAdd,
    deletePlaylist: deletePlaylist,
    followPlaylist: followPlaylist,
    updatePlaylistInfo: updatePlaylistInfo,
    orderPlaylistTracks: orderPlaylistTracks,
    searchQuery: searchQuery,
    getUserInfo: getUserInfo,
    getUserTracks: getUserTracks,
    getUserPublicPlaylists: getUserPublicPlaylists,
    getPopularPlaylists: getPopularPlaylists,
    getAllUsers: getAllUsers,
  }
}

export default makeApi()
