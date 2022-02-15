import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ItemWrapper = styled(Link)`
  display: grid;
  grid-template-columns: 10rem repeat(auto-fill, 200px);
  /* width: 35rem; */
  margin: 0 1rem;
  border-radius: 10px;
  text-decoration: none;
`

export const ItemBlue = styled(ItemWrapper)`
  background: #3936d0;
`
export const ItemGreen = styled(ItemWrapper)`
  background: #53b724;
`
export const ItemMagenta = styled(ItemWrapper)`
  background: #eb2a9a;
`

export const ItemContent = styled.div`
  height: 10rem;
  border-radius: 10px 0 0 10px;
  background: ${(props) => `url(${props.bgImage})`};
  background-size: cover;
  background-position: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 13rem;
    height: 13rem;
  }
`

export const Text = styled.p`
  align-self: center;
  margin: 1rem;
  color: ${({ theme }) => theme.colors.text};
`
