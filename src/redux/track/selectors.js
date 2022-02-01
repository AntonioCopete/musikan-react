import { createSelector } from 'reselect'

export const selectTrackState = (state) => state.track

export const trackSelector = createSelector(
  [selectTrackState],
  (track) => track
)
