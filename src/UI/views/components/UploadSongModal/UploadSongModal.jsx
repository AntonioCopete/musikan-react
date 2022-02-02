import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import api from "../../../../api"
import * as auth from '../../../../services/auth/auth'

import { Button } from '../../../styles/GlobalComponents/Button'
import { ButtonLink } from '../../../styles/GlobalComponents/NavLink'

import { HiddenInput } from "./UploadSongModal.styles"

import defaultPic from "./default-album.jpg"

function UploadSongModal() {
  const navigate = useNavigate()

  const songNameInputRef = useRef()
  const songImageInputRef = useRef()
  const songFileInputRef = useRef()
  const genreInputRef = useRef()
  const defaultGenreRef = useRef()
  const [genres, setGenres] = useState([])
  const [error, setError] = useState("")
  const [selectedSongFile, setSelectedSongFile] = useState()
  const [selectedSongImg, setSelectedSongImg] = useState()
  const [imageSrcPreview, setImageSrcPreview] = useState()

  useEffect(() => {
    getGenres()
  }, [])

  const getGenres = async () => {
    const response = await api.getGenres()
    setGenres(response.data)
  }

  const handlePic = (e) => {
    if (e.target.value === '') return
    onSelectFile(e)
  }

  const handleSelectedSongFile = (e) => {
    const fileName = e.target.files[0].name.split(".")[0]
    if (songNameInputRef.current.value === "") {
      songNameInputRef.current.value = fileName
    } // ! REFACTOR -> USEREF TO USESTATE

    if (!e.target.files[0]) {
      setSelectedSongFile("")
    } else if (e.target.files[0].name !== "") {
      setSelectedSongFile(e.target.files[0].name)
    }  
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    getUserTokenAndRequestUpload()
  }

  const getUserTokenAndRequestUpload = async () => {
    const token = await auth.getCurrentUserToken()
    uploadRequest(token)
  }

  const uploadRequest = (token) => {
    if (genreInputRef.current.value === "Select a genre") return setError("You have to select a genre")
    if (songNameInputRef.current.value === "") return setError("Name can't be blank")
    if (songImageInputRef.current.value === "") return setError("You have to select a song image")
    if (songFileInputRef.current.value === "") return setError("You have to select a song file")

    const selectedSongName = songNameInputRef.current.value
    const selectedGenre = genreInputRef.current.value
    const selectedSongPicFile = songImageInputRef.current.files[0]
    const selectedSongFile = songFileInputRef.current.files[0]

    const formData = new FormData()
    formData.append("name", selectedSongName)
    formData.append("genre", selectedGenre)
    formData.append("thumbnail", selectedSongPicFile)
    formData.append("track", selectedSongFile)

    api.uploadTrack({Authorization: `Bearer ${token}`}, formData)
  }

  useEffect(() => {
    if (!selectedSongImg) {
      setImageSrcPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedSongImg)
    setImageSrcPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedSongImg])

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedSongImg(undefined)
      return
    }

    setSelectedSongImg(e.target.files[0])
  }

  return (
    <>

      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="uploadSongImageInput">
          <img src={selectedSongImg ? imageSrcPreview : defaultPic} alt="Your song's pic" />
        </label>
        <HiddenInput type="file" id="uploadSongImageInput" onChange={handlePic} ref={songImageInputRef} />
        <label htmlFor="uploadSongFileInput">Click here to select your file</label>
        {selectedSongFile && <p>{selectedSongFile}</p>}
        <HiddenInput type="file" id="uploadSongFileInput" onChange={handleSelectedSongFile} ref={songFileInputRef} />
        <input type="text" placeholder="Name" ref={songNameInputRef} />
        <select ref={genreInputRef} onChange={() => {defaultGenreRef.current.disabled = true}}>
          <option ref={defaultGenreRef}>Select a genre</option>
          {genres && genres.map((genre) => {
            return <option key={genre} value={genre}>{genre}</option>
          })}
        </select>
        {error && <p>{error}</p>}
        <Button primary type="submit">
        Save
      </Button>
      <ButtonLink
        onClick={() => {
          navigate(-1)
        }}
      >
        Cancel
      </ButtonLink>
      </form>

    </>
  );
}

export default UploadSongModal;