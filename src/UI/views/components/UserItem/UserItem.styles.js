import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ItemWrapper = styled(Link)`
  display: block;
  width: 20rem;
  margin: 0 2rem;
  text-decoration: none;
`

export const ItemContent = styled.div`
  position: relative;
  width: inherit;
  height: 20rem;
  border-radius: 50%;
  background: ${(props) => `url(${props.bgImage})`};
  background-size: cover;
  background-position: center;
  transition: 0.3s ease-in-out;

  :hover {
    filter: blur(1px);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 13rem;
    height: 13rem;
  }
`

export const ItemText = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`
