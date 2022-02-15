import styled from 'styled-components'
import { FaPlay } from 'react-icons/fa'

export const Image = styled.div`
  display: inline-block;
  position: relative;
  width: 6rem;
  height: 6rem;
  border-radius: 5px;
  background: ${(props) => `url(${props.bgImage})`};
  background-size: cover;
  transition: all 0.5s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    z-index: 10;

    svg {
      display: block;
    }
  }
`

export const Icon = styled(FaPlay)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  display: none;
  color: ${({ theme }) => theme.colors.text};
`
