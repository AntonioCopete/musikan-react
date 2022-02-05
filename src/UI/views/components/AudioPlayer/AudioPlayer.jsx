import { useState } from 'react'
import ReactPlayer from 'react-player'

import muzik from '../../../img/ska.mp3'

import {
  AudioWrapper,
  AudioGroup,
  ForwardBackwardBtn,
  PlayPauseBtn,
  ProgressBar,
} from './AudioPlayer.styles'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { FaPlay, FaPause } from 'react-icons/fa'
import { useSelector } from 'react-redux'


function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const { url } = useSelector((state) => state.currentTrack)

  return (
    <AudioWrapper>
      <AudioGroup>
        <audio src={muzik} preload="metadata"></audio>
        <ForwardBackwardBtn>
          <MdArrowBackIosNew />
        </ForwardBackwardBtn>
        <PlayPauseBtn>{isPlaying ? <FaPause /> : <FaPlay />}</PlayPauseBtn>
        <ForwardBackwardBtn>
          <MdArrowForwardIos />
        </ForwardBackwardBtn>
      </AudioGroup>
      <AudioGroup progress>
        {/* current time */}
        <div>11:00</div>
        {/* progress bar */}
        <ProgressBar type="range" currentTime={90} />
        {/* duration */}
        <div>22:00</div>
      </AudioGroup>
    </AudioWrapper>
  )
}

export default AudioPlayer
