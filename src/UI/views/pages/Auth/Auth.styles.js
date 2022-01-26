import styled from 'styled-components'

export const Container = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  @media (max-width: 54.375rem) {
    min-height: 800px;
    height: 100vh;
  }

  &::before {
    content: '';
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    right: 48%;
    transform: translateY(-50%);
    z-index: 6;
    transition: 1.8s ease-in-out;

    @media (max-width: 54.375rem) {
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
