import * as React from 'react'

import ReactPlayer from 'react-player'
import { AudioWrapper } from './AudioPlayer.styles'
import LinearWithValueLabel from './LinearProgress'
function AudioPlayer() {
  return (
    <AudioWrapper>
      <LinearWithValueLabel value={30} />
    </AudioWrapper>
  )
}

export default AudioPlayer
