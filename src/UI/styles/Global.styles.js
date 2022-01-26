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
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${({ theme }) => theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    cursor: default;
		transition: background-color 0.5s linear;

  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text}
  }
	
  li{
    list-style: none;
  }
`
export default GlobalStyles
