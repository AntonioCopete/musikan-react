import { createSelector } from 'reselect'

export const selectCurrentTrackState = (state) => state.currentTrack

export const currentTrackSelector = createSelector(
  [selectCurrentTrackState],
  (currentTrack) => currentTrack
)
