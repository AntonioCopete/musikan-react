import styled from 'styled-components'

const AuthContainer = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.lg} {
    min-height: 800px;
    height: 100vh;
  }

  ::before {
    position: absolute;
    content: '';
    width: 2000px;
    height: 2000px;
    right: 48%;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    transform: translateY(-50%);
    transition: 1.8s ease-in-out;
    z-index: 6;

    @media ${(props) => props.theme.breakpoints.lg} {
      width: 1500px;
      height: 1500px;
      left: 30%;
      bottom: 68%;
      transform: translateX(-50%);
      right: initial;
      top: initial;
      transition: 2s ease-in-out;
    }
  }
`

export default AuthContainer
