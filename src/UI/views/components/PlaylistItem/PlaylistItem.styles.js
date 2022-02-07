import styled from 'styled-components'
import { RiMore2Fill } from 'react-icons/ri'

export const ItemWrapper = styled.div`
  display: block;
`
export const ItemContent = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  border-radius: 5px;
  transition: all 1s ease-in-out;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 7.5rem;
    height: 7.5rem;
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
export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`

export const Icon = styled(RiMore2Fill)`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 2rem;
  display: none;
  color: ${({ theme }) => theme.colors.text};
`
export const Text = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`
