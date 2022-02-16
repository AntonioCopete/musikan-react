import styled from 'styled-components'

const width = '3000'
const height = '1500'

export const PanelWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 20rem;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.md} {
    min-height: 18rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    min-height: 14rem;
  }

  ::before {
    position: absolute;
    content: '';
    width: ${width}px;
    height: ${height}px;
    bottom: 0;
    left: 30%;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    transform: translateX(-50%);
    transition: 2s ease-in-out;

    @media ${(props) => props.theme.breakpoints.xxl} {
      width: calc(${width}px * 2);
      height: calc(${height}px * 2);
    }

    @media ${(props) => props.theme.breakpoints.sm} {
      left: 0;
      /* bottom: 15%; */
    }
  }
`

export const PanelContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`
export const PanelContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.text};
  z-index: 1;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }

  > * {
    &:first-child {
      align-self: flex-end;
    }
  }
`
