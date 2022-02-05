import styled from 'styled-components'

export const PanelWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 200px;
  overflow: hidden;

  ::before {
    position: absolute;
    content: '';
    width: 3000px;
    height: 1500px;
    bottom: 0;
    left: 30%;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    transform: translateX(-50%);
    transition: 2s ease-in-out;
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
