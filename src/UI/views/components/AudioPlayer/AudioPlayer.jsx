import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'

import {
  AudioWrapper,
  AudioGroup,
  PlayPauseBtn,
  ProgressBar,
} from './AudioPlayer.styles'
import { FaPlay, FaPause } from 'react-icons/fa'

function AudioPlayer() {
  const { url } = useSelector((state) => state.currentTrack)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playedSeconds, setPlayedSeconds] = useState(0)
  const [totalSeconds, setTotalSeconds] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) setIsPlaying(true)
  }, [url])

  const onProgress = (data) => {
    setPlayedSeconds(data.playedSeconds)
    setTotalSeconds(data.loadedSeconds)
  }

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60)
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`

    const seconds = Math.floor(secs % 60)
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

    return `${returnedMinutes}:${returnedSeconds}`
  }

  return (
    <AudioWrapper>
      <AudioGroup>
        <ReactPlayer
          className="react-player"
          url={url}
          playing={isPlaying}
          height="0"
          width="0"
          onProgress={(e) => onProgress(e)}
        />
        <PlayPauseBtn>
          {isPlaying ? (
            <FaPause onClick={() => setIsPlaying(false)} />
          ) : (
            <FaPlay onClick={() => setIsPlaying(true)} />
          )}
        </PlayPauseBtn>
      </AudioGroup>
      <AudioGroup progress>
        {/* current time */}
        <span>{calculateTime(playedSeconds)}</span>
        <ProgressBar
          type="range"
          progress="value"
          value={playedSeconds}
          onChange={(e) => setPlayedSeconds(Number(e))}
          total={totalSeconds}
        />
        {/* duration */}
        <span>{calculateTime(totalSeconds)}</span>
      </AudioGroup>
    </AudioWrapper>
  )
}

export default AudioPlayer
