import styled from 'styled-components'
import { FaPlay } from 'react-icons/fa'

export const TrackIndex = styled.span`
  align-self: center;
`

export const ItemContent = styled.div`
  display: inline-block;
  position: relative;
  width: 8rem;
  height: 8rem;
  border-radius: 5px;
  background: ${(props) => `url(${props.bgImage})`};
  background-size: cover;
  transition: all 0.5s ease-in-out;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 6rem;
    height: 6rem;
  }

  :hover {
    background: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    z-index: 10;

    svg {
      display: block;
    }
  }
`

export const PlayIcon = styled(FaPlay)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  display: none;
  color: ${({ theme }) => theme.colors.text};
`

export const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 3rem;
`
