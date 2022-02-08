import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    /* display: grid;
    height: 100vh;
    place-content: center; */
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${({ theme }) => theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    cursor: default;
		transition: background-color 0.5s linear;
    accent-color: ${(props) => props.theme.colors.primary};
  }

  h1, h2 {
    margin-bottom: .8rem;
    color: ${({ theme }) => theme.colors.text};
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.title};

    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: ${({ theme }) => theme.fonts.titleMobile};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.secondaryTitle};

    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: ${({ theme }) => theme.fonts.secondaryTitleMobile};
    }
  }
	
  li {
    list-style: none;
  }
`
export default GlobalStyles
