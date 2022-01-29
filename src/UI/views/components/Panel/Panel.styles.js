import styled from 'styled-components'

export const PanelWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 800px;
  overflow: hidden;

  ::before {
    position: absolute;
    content: '';
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    width: 3000px;
    height: 1500px;
    bottom: 70%;
    left: 30%;
    transform: translateX(-50%);
    right: initial;
    top: initial;
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
`
