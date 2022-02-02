import { useState, useRef, useEffect } from 'react'
import {
  AudioWrapper,
  AudioGroup,
  ForwardBackwardBtn,
  PlayPauseBtn,
  ProgressBar,
} from './AudioPlayer.styles'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { FaPlay, FaPause } from 'react-icons/fa'

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const audioPlayer = useRef()
  const progressBar = useRef()

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
    } else {
      audioPlayer.current.pause()
    }
  }

  const handleRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value
  }
  return (
    <AudioWrapper>
      <AudioGroup>
        <audio
          ref={audioPlayer}
          src="https://res.cloudinary.com/dmkdsujzh/video/upload/v1643827032/tracks/track-1643827030734_r2krag.mp3"
          preload="metadata"
        ></audio>
        <ForwardBackwardBtn>
          <MdArrowBackIosNew />
          30
        </ForwardBackwardBtn>
        <PlayPauseBtn onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </PlayPauseBtn>
        <ForwardBackwardBtn>
          30
          <MdArrowForwardIos />
        </ForwardBackwardBtn>
      </AudioGroup>
      <AudioGroup>
        {/* current time */}
        <div>{calculateTime(currentTime)}</div>

        {/* progress bar */}
        <div>
          <ProgressBar
            type="range"
            defaultValue="0"
            progress={46}
            ref={progressBar}
            onChange={handleRange}
          />
        </div>

        {/* duration */}
        <div>{duration && !isNaN(duration) && calculateTime(duration)}</div>
      </AudioGroup>
    </AudioWrapper>
  )
}

export default AudioPlayer
