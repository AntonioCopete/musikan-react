import styled from 'styled-components'

export const Menu = styled.nav`
  a {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media all and (min-width: 639px) {
    display: none;
  }
`
