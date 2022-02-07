import styled from 'styled-components'

const width = '3000'
const height = '1500'

export const PanelWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 200px;
  overflow: hidden;

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
  color: white;
  z-index: 1;

  > * {
    &:first-child {
      align-self: flex-end;
    }
  }
`
