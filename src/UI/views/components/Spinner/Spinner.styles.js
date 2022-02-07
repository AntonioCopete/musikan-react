import styled from 'styled-components'

export const SpinnerWrapper = styled.aside`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`
export const SpinnerContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10rem;
  height: 10rem;
  text-align: center;
  font-size: 3rem;
`

export const SpinnerItem = styled.div`
  display: inline-block;
  height: 100%;
  width: 0.8rem;
  margin: 0 0.5rem;
  background-color: white;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;

  &.rect2 {
    animation-delay: -1.1s;
  }

  &.rect3 {
    animation-delay: -1s;
  }

  &.rect4 {
    animation-delay: -0.9s;
  }

  &.rect5 {
    animation-delay: -0.8s;
  }

  @-webkit-keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1);
    }
  }

  @keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1);
      -webkit-transform: scaleY(1);
    }
  }
`
