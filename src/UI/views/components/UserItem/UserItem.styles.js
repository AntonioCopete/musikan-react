import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`

export const ItemContent = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  background: ${(props) => `url(${props.bgImage})`};
  background-size: cover;
  background-position: center;
  transition: 0.3s ease-in-out;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 15rem;
    height: 15rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 13rem;
    height: 13rem;
  }

  :hover {
    filter: blur(1px);
  }
`

export const ItemText = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`
