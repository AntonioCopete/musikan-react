import styled from 'styled-components'

export const GridLayout = styled.div`
  display: grid;
  grid-template-areas:
    'nav header'
    'nav main'
    'aside main'
    'aside footer';
  grid-template-rows: 20rem 1fr 120px 10rem;
  grid-template-columns: 20% 1fr;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  height: 100vh;
  margin: 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-areas:
      'header'
      'main'
      'aside'
      'footer'
      'nav';
    grid-template-rows: 10rem 1fr 1fr 10rem 10rem;
    grid-template-columns: 1fr;
  }

  header {
    grid-area: header;
  }

  main {
    grid-area: main;
  }

  nav {
    grid-area: nav;
  }

  footer {
    grid-area: footer;
    background: pink;
  }

  aside {
    grid-area: aside;
    background: blue;
  }
`
