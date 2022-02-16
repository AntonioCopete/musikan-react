import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`

export const ItemContainer = styled(Link)`
  display: grid;
  grid-template-columns: 10rem 1fr;
  margin: 0 1rem;
  border-radius: 10px;
  text-decoration: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 10rem 1fr;
  }
`

export const ItemBlue = styled(ItemContainer)`
  background: #3936d0;
`
export const ItemGreen = styled(ItemContainer)`
  background: #53b724;
`
export const ItemMagenta = styled(ItemContainer)`
  background: #eb2a9a;
`

export const ItemContent = styled.div`
  height: 10rem;
  border-radius: 10px 0 0 10px;
  background: ${(props) => `url(${props.bgImage})`};
  background-size: cover;
  background-position: center;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 8rem;
    height: 8rem;
  }
`

export const Text = styled.p`
  align-self: center;
  margin: 1rem;
  color: ${({ theme }) => theme.colors.text};
`
