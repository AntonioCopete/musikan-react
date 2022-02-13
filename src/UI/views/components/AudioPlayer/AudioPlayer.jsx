import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'

import {
  AudioWrapper,
  AudioGroup,
  PlayPauseBtn,
  ProgressBar,
  PlayedTime,
  TotalTime,
} from './AudioPlayer.styles'
import { FaPlay, FaPause } from 'react-icons/fa'

function AudioPlayer() {
  const { url } = useSelector((state) => state.currentTrack)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playedSeconds, setPlayedSeconds] = useState(0)
  const [totalSecondsLoaded, setTotalSecondsLoaded] = useState(0)
  const [totalSecondsDuration, setTotalSecondsDuration] = useState(0)
  const [percentPlayed, setPercentPlayed] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) setIsPlaying(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  const calculateTotalDuration = (e) => {
    setTotalSecondsDuration(e)
  }

  const onProgress = (data) => {
    setPlayedSeconds(data.playedSeconds)
    setTotalSecondsLoaded(data.loadedSeconds)
    const percentCalc = (data.playedSeconds * 100) / totalSecondsDuration
    setPercentPlayed(percentCalc)
  }

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60)
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`

    const seconds = Math.floor(secs % 60)
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

    return `${returnedMinutes}:${returnedSeconds}`
  }

  const onTrackEnding = () => {
    setIsPlaying(false)
  }

  return (
    <AudioWrapper>
      <AudioGroup>
        <ReactPlayer
          url={url}
          playing={isPlaying}
          height="0"
          width="0"
          onProgress={(e) => onProgress(e)}
          onDuration={(e) => calculateTotalDuration(e)}
          onEnded={onTrackEnding}
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
        <PlayedTime>{calculateTime(playedSeconds)}</PlayedTime>
        <ProgressBar
          type="range"
          progress="value"
          value={percentPlayed}
          onChange={(e) => setPlayedSeconds(Number(e))}
          total={totalSecondsLoaded}
        />
        <TotalTime>{calculateTime(totalSecondsDuration)}</TotalTime>
      </AudioGroup>
    </AudioWrapper>
  )
}

export default AudioPlayer
