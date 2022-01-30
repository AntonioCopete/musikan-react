import { PanelWrapper, PanelContainer, PanelContent } from './PanelAuth.styles'

function PanelAuth({ animated, children }) {
  return (
    <PanelWrapper animated={animated}>
      <PanelContainer>
        <PanelContent>{children}</PanelContent>
      </PanelContainer>
    </PanelWrapper>
  )
}

export default PanelAuth
