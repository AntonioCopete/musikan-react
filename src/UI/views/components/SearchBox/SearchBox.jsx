import { useState } from 'react'
import {
  SearchBoxWrapper,
  SearchInput,
  SearchIcon,
} from './SearchBox.styles.js'

function SearchBox() {
  const [show, setShow] = useState(false)

  const toggleVisibility = () => {
    setShow(!show)
  }

  return (
    <SearchBoxWrapper>
      <SearchInput
        className={show ? '--show' : ''}
        type="text"
        id="box"
        placeholder="Search anything..."
      />
      <SearchIcon onClick={toggleVisibility} />
    </SearchBoxWrapper>
  )
}

export default SearchBox
