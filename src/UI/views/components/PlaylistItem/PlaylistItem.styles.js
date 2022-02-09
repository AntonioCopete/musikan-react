import styled from 'styled-components'
import { ImEyePlus } from 'react-icons/im'

export const ItemWrapper = styled.div`
  display: block;
  width: 13rem;
`
export const ItemContent = styled.div`
  position: relative;
  width: inherit;
  height: 13rem;
  border-radius: 5px;
  background: ${(props) => `url(${props.bgImage})`};
  background-size: cover;
  transition: all 0.5s ease-in-out;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 10rem;
    height: 10rem;
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
export const Text = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`

export const Footer = styled.footer`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`
