import { useState, useRef, useEffect } from 'react'
import muzik from '../../../img/ska.mp3'
import './Audio.scss'

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
  const { url } = useSelector((state) => state.currentTrack)
  // state
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  // references
  const audioPlayer = useRef()
  const progressBar = useRef()
  const animationRef = useRef()

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration)
    setDuration(seconds)
    progressBar.current.max = seconds
  }, [audioPlayer?.current?.loadedMetadata, audioPlayer?.current?.readyState])

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60)
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`

    const seconds = Math.floor(secs % 60)
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

    return `${returnedMinutes}:${returnedSeconds}`
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying
    setIsPlaying(!prevValue)

    if (!prevValue) {
      audioPlayer.current.play()
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause()
      cancelAnimationFrame(animationRef.current)
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime
    changePlayerCurrentTime()
    animationRef.current = requestAnimationFrame(whilePlaying)
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value
    changePlayerCurrentTime()
  }

  const changePlayerCurrentTime = () => {
    // progressBar.current.style.setProperty(
    //   'seek-before-width',
    //   `${(progressBar.current.value / duration) * 100}%`
    // )
    const width = (progressBar.current.value / duration) * 100
    console.log(width)
    console.log(progressBar.current.style)
    setCurrentTime(progressBar.current.value)
  }

  return (
    <AudioWrapper>
      <AudioGroup>
        <audio ref={audioPlayer} src={url} preload="metadata"></audio>
        <ForwardBackwardBtn>
          <MdArrowBackIosNew />
        </ForwardBackwardBtn>
        <PlayPauseBtn onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </PlayPauseBtn>
        <ForwardBackwardBtn>
          <MdArrowForwardIos />
        </ForwardBackwardBtn>
      </AudioGroup>
      <AudioGroup progress>
        {/* current time */}
        <div>{calculateTime(currentTime)}</div>
        {/* progress bar */}
        <ProgressBar
          className="progressBarC"
          type="range"
          defaultValue="0"
          // progressWidth={90}
          ref={progressBar}
          onChange={changeRange}
        />
        {/* duration */}

        {/* <div>{duration && !isNaN(duration) && calculateTime(duration)}</div> */}
      </AudioGroup>
    </AudioWrapper>
  )
}

export default AudioPlayer
