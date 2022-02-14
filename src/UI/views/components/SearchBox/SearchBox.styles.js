import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

export const SearchBoxWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 33rem;
  height: auto;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: 4rem;
  padding: 0 1rem;
  margin-left: 1rem;
`

export const SearchInput = styled.input`
  width: 0;
  height: 4rem;
  background: none;
  color: ${({ theme }) => theme.colors.text};
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
  box-sizing: border-box;
  font-size: 2rem;
  margin: 0.8rem;
  cursor: pointer;
  transition: all 0.25s ease-in;
`
