import { useState, useRef } from 'react'
import {
  SearchBoxWrapper,
  SearchInput,
  SearchIcon,
} from './SearchBox.styles.js'

function SearchBox({ setQuery }) {
  const [show, setShow] = useState(false)
  const searchRef = useRef()

  const toggleVisibility = () => {
    setShow(!show)
  }

  return (
    <SearchBoxWrapper>
      <SearchInput
        className={show ? '--show' : ''}
        type="text"
        placeholder="Find anything..."
        ref={searchRef}
        onChange={() => setQuery(searchRef.current.value)}
      />
      <SearchIcon onClick={toggleVisibility} />
    </SearchBoxWrapper>
  )
}

export default SearchBox
