import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

export const SearchBoxWrapper = styled.div`
  width: 350px;
  height: auto;
  background-color: #1e272e;
  border-radius: 4rem;
  padding: 10px;
`

export const SearchInput = styled.input`
  width: 0;
  height: 4rem;
  background: none;
  color: #f7f7f7;
  font-size: 1.5rem;
  border-radius: 2rem;
  outline: none;
  border: none;
  opacity: 1;
  transition: all 0.75s ease-in;
  cursor: pointer;

  &.--show {
    width: 85%;
  }
`

export const SearchIcon = styled(FaSearch)`
  /* display: inline-block; */
  box-sizing: border-box;
  font-size: 2rem;
  margin: 0.8rem;
  /* margin-left: 0.8rem;
  margin-top: 0; */
  cursor: pointer;
  transition: all 0.25s ease-in;
`
