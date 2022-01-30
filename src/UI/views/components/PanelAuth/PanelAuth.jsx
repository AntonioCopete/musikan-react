import { PanelWrapper, PanelContainer, PanelContent } from './PanelAuth.styles'

function PanelAuth({ children }) {
  return (
    <PanelWrapper>
      <PanelContainer>
        <PanelContent>{children}</PanelContent>
      </PanelContainer>
    </PanelWrapper>
  )
}

export default PanelAuth
