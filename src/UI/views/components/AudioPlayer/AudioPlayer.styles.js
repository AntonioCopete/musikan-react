import styled from 'styled-components'

export const AudioWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const AudioGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => props.progress && 'width: 100%'};
`

export const AudioButton = styled.button`
  color: ${({ theme }) => theme.colors.text};
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const ForwardBackwardBtn = styled(AudioButton)`
  display: flex;
  align-items: center;
`

export const PlayPauseBtn = styled(AudioButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  font-size: 1.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};

  :hover {
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    background: transparent;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 3rem;
    height: 3rem;
  }
`

export const ProgressBar = styled.input`
  position: relative;
  width: 100%;
  height: 5px;
  border-radius: 5px;
  appearance: none;
  outline: none;
  background: ${({ theme }) => theme.colors.grey};

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    width: ${(props) => props.value}%;
    border-radius: 1rem;
    background: ${({ theme }) => theme.colors.primary};
    z-index: 2;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    appearance: none;
  }
`

export const PlayedTime = styled.span`
  padding-right: 01rem;
`

export const TotalTime = styled.span`
  padding-left: 1rem;
`
