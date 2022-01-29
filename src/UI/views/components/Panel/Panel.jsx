import { PanelWrapper, PanelContainer, PanelContent } from './Panel.styles'

function Panel({ children }) {
  return (
    <PanelWrapper>
      <PanelContainer>
        <PanelContent>{children}</PanelContent>
      </PanelContainer>
    </PanelWrapper>
  )
}

export default Panel
