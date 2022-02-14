import styled from 'styled-components'
import { ImEyePlus } from 'react-icons/im'

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: start;
  width: 20rem;
`
export const ItemContent = styled.div`
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

export const Icon = styled(ImEyePlus)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  display: none;
  color: ${({ theme }) => theme.colors.text};
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 0.5rem;
`

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${(props) => (props.small ? '1rem' : 'inherit')};
`
