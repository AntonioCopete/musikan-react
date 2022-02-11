import styled from 'styled-components'

export const GridLayout = styled.div`
  display: grid;
  grid-template-areas:
    'nav header'
    'nav main'
    'aside main'
    'aside footer';
  grid-template-rows: 20rem 1fr 15rem 10rem;
  grid-template-columns: 12% 1fr;
  gap: 1rem;
  height: 100vh;
  margin: 0;

  @media ${(props) => props.theme.breakpoints.xl} {
    grid-template-columns: 20% 1fr;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-areas:
      'header'
      'main'
      'aside'
      'footer'
      'nav';
    grid-template-rows: 20rem 1fr 8rem 8rem 5rem;
    grid-template-columns: 1fr;
    gap: 0;
  }
`

export const Header = styled.header`
  grid-area: header;
`
export const Main = styled.main`
  grid-area: main;
  padding: 2rem;
  overflow: auto;
`
export const Footer = styled.footer`
  grid-area: footer;
`
export const Aside = styled.aside`
  grid-area: aside;
`
